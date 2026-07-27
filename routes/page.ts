// Imports
import { Hono } from 'hono';
import * as pageController from '../controllers/page.ts';

// Router
const app = new Hono();

// Routes
app.get('/', pageController.settingsPage);
app.get('/overlay', pageController.overlayPage);

export default app;
