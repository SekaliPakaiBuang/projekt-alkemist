// Imports
import { redis } from 'bun';
import { Context } from 'hono';

// Controller
export async function youtubeGet(c: Context) {
	return c.json({ message: 'Pengaturan YouTube diterima dengan sukses.' });
}

export async function youtubePost(c: Context) {
	try {
		let errors: string[] = [];
		let data: Record<string, unknown> = await c.req.json();

		// Null check
		if (typeof data !== 'object' || data === null) {
			return c.json({ error: 'Jenis data tidak valid.' }, 400);
		}

		const { channelUsername, videoId } = data as Record<string, unknown>;

		// Validate channelUsername and videoId
		if (typeof channelUsername !== 'string' || channelUsername.trim() === '')
			errors.push('Channel Username tidak boleh kosong.');
		if (typeof videoId !== 'string' || videoId.trim() === '')
			errors.push('Video ID tidak boleh kosong.');

		// Returns
		if (errors.length > 0)
			return c.json({ errors }, 400);

		// Store in Redis
		await redis.hset('youtube', 'channelUsername', channelUsername as string);
		await redis.hset('youtube', 'videoId', videoId as string);

		return c.json({ message: 'Pengaturan YouTube berhasil disimpan.' }, 200);
	}
	catch (error) {
		return c.json({ error: 'Gagal menyimpan pengaturan YouTube.' }, 500);
	}
}
