// Imports
import { Hono, type Context } from 'hono';
import * as apiController from '../controllers/api.ts';

// Router
const app = new Hono();

// Routes
app.post('/youtube', apiController.youtubePost);
app.get('/youtube', apiController.youtubeGet);

export default app;
