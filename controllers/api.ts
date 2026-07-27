// Imports
import { redis } from 'bun';
import { Context } from 'hono';

// Controller
export async function youtubeGet(c: Context) {
	return c.json({ message: 'YouTube settings received successfully.' });
}

export async function youtubePost(c: Context) {
	try {
		let errors: string[] = [];
		let data: Record<string, unknown> = await c.req.json();

		// Null check
		if (typeof data !== 'object' || data === null) {
			return c.json({ error: 'Invalid JSON format.' }, 400);
		}

		const { channelUsername, videoId } = data as Record<string, unknown>;

		// Validate channelUsername and videoId
		if (typeof channelUsername !== 'string' || channelUsername.trim() === '')
			errors.push('channelUsername is required and must be a non-empty string.');
		if (typeof videoId !== 'string' || videoId.trim() === '')
			errors.push('videoId is required and must be a non-empty string.');

		// Returns
		if (errors.length > 0)
			return c.json({ errors }, 400);

		// Store in Redis
		await redis.hset('youtube', 'channelUsername', channelUsername as string);
		await redis.hset('youtube', 'videoId', videoId as string);

		return c.json({ message: 'YouTube settings updated successfully.' }, 200);
	}
	catch (error) {
		return c.json({ error: 'Failed to update YouTube settings.' }, 500);
	}
}
