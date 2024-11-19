import { Application, Router } from 'jsr:@oak/oak';
import { oakCors } from '@tajpouria/cors';
import 'jsr:@std/dotenv/load';

import candidatesRoute from './route/route.ts';

const app = new Application();
const router = new Router();
const frontendUrl = Deno.env.get('FRONTEND_URL');

app.use(
  oakCors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
  })
);

// Routes
candidatesRoute(router);
app.use(router.routes());
app.use(router.allowedMethods());

// 404 handler for unmatched routes
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: 'Not Found' };
});

// Export the app instance for testing
export default app;
