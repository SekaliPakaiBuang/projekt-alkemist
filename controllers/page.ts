// Imports
import { Context } from 'hono';
import IndexPage from '../views/index.tsx';

// Controller
export async function settingsPage(c: Context) {
	return c.html(IndexPage());
}