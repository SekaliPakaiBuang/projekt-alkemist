// Imports
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

// App
const app = new Hono();

// Middleware
app.use(logger());
app.use(prettyJSON({ force: true }));

// Routes
import pageRouter from './routes/page';
app.route('/', pageRouter);

export default app;