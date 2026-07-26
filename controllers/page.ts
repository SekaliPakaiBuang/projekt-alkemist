// Imports
import { Context } from 'hono';
import IndexPage from '../views/index.tsx';
import OverlayPage from '../views/overlay.tsx';

// Controller
export async function settingsPage(c: Context) {
	return c.html(IndexPage());
}

export async function overlayPage(c: Context) {
	return c.html(OverlayPage());
}
