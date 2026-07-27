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
		return c.json({ error: 'Failed to load the page.' }, 500);
	}
}

export async function overlayPage(c: Context) {
	return c.html(OverlayPage());
}
