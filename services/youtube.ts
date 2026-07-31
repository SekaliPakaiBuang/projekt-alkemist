import { google } from 'googleapis';
import { redis } from 'bun';

type RedisValue = string | null;

// YouTube API setup
const apiKey = process.env.YT_API_KEY;

if (!apiKey) {
	throw new Error('YT_API_KEY tidak ada di environment variable');
}

const youtube = google.youtube({
	version: 'v3',
	auth: process.env.YT_API_KEY,
});

class YouTubeService {
	pollSchedule: ReturnType<typeof setInterval> | null = null;

	start(): void {
		console.info('Mulai mendapatkan data YouTube');
		this.pollSchedule = setInterval(() => {
			void this.#poll();
		}, 20000);
		void this.#poll(); // Initial poll
	}

	async #poll(): Promise<void> {
		try {
			// Get config from Redis
			const channel = await redis.hget('youtube', 'channel') as RedisValue;
			const video = await redis.hget('youtube', 'video') as RedisValue;

			if (!channel || !video) {
				return;
			}

			const channelUsername = String(channel);
			const videoId = String(video);

			// Get data
			const [channelQuery, videoQuery] = await Promise.all([
				youtube.channels.list({
					part: ['statistics'],
					forHandle: channelUsername,
				}),
				youtube.videos.list({
					part: ['liveStreamingDetails', 'statistics'],
					id: [videoId],
				}),
			]);

			// Extraction
			const { statistics: { subscriberCount: subscribers = 0 } = {} } = channelQuery.data.items?.[0] ?? {};
			const {
				statistics: { likeCount: likes = 0 } = {},
				liveStreamingDetails: { concurrentViewers: views = 0 } = {},
			} = videoQuery.data.items?.[0] ?? {};

			// Update Redis
			await redis.hset('youtube', {
				subscribers: Number(subscribers),
				likes: Number(likes),
				views: Number(views),
			});
		}
		catch (error: unknown) {
			console.error(error);
		}
	}
}

export default new YouTubeService();