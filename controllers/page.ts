// Imports
import { redis } from 'bun';
import { Context } from 'hono';

import SettingsPage from '../views/settings.tsx';
import OverlayPage from '../views/overlay.tsx';

// Controller
export async function settingsPage(c: Context) {
	try {
		// Fetch YouTube settings from Redis
		const channelUsername = await redis.hget('youtube', 'channelUsername') || '';
		const videoId = await redis.hget('youtube', 'videoId') || '';

		return c.html(
			SettingsPage({
				channelUsername,
				videoId
			})
		);
	}
	catch (error) {
		return c.json({ error: 'Gagal memuat halaman.' }, 500);
	}
}

export async function overlayPage(c: Context) {
	return c.html(OverlayPage());
}

export async function livechatPage(c: Context) {
	try {
		// Fetch YouTube video ID from Redis
		const videoId = await redis.hget('youtube', 'videoId');

		if (!videoId) {
			return c.json({ error: 'YouTube video ID not found.' }, 404);
		}

		return c.redirect(`https://www.youtube.com/live_chat?v=${videoId}`);
	}
	catch (error) {
		return c.json({ error: 'Gagal memuat halaman.' }, 500);
	}
}