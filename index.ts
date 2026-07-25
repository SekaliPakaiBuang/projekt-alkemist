// Imports
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { serveStatic } from 'hono/bun';

// App
const app = new Hono();

// Middleware
app.use(logger());
app.use(prettyJSON({ force: true }));
app.use('/css/*', serveStatic({ root: './public' }));
app.use('/js/*', serveStatic({ root: './dist' }));

// Routes
import pageRouter from './routes/page';
app.route('/', pageRouter);

export default app;