import { Application, Router } from 'jsr:@oak/oak';
import { oakCors } from '@tajpouria/cors';
import 'jsr:@std/dotenv/load';

import candidatesRoute from './route/route.ts';

const app = new Application();
const router = new Router();

// Load the environment variables
const frontendUrl = Deno.env.get('FRONTEND_URL') || '*';
console.log('Running in environment:', Deno.env.get('DENO_ENV'));
console.log('Frontend URL:', frontendUrl);

app.use(
  oakCors({
    // origin: "*",
    origin: frontendUrl, // In production, replace with the frontend domain
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
  })
);

// Routes
app.use(router.routes());
app.use(router.allowedMethods());
candidatesRoute(router);

// 404 handler for unmatched routes
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: 'Not Found' };
});

// Export the app instance for testing
export default app;
