// Imports
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { serveStatic } from 'hono/bun';
import { timeout } from 'hono/timeout';
// App
const app = new Hono();

// Middleware
app.use(logger());
app.use(prettyJSON({ force: true }));

app.use('/css/*', serveStatic({ root: './public' }));
app.use('/svg/*', serveStatic({ root: './public' }));
app.use('/js/*', serveStatic({ root: './dist' }));

app.use(timeout(10000));

// Routes
import pageRouter from './routes/page';
import apiRouter from './routes/api';
app.route('/', pageRouter);
app.route('/api', apiRouter);

// Services
import youtubeService from './services/youtube';

youtubeService.start();

export default app;
