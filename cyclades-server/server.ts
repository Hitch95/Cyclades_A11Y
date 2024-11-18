import { Application, Router } from 'jsr:@oak/oak';
import { oakCors } from '@tajpouria/cors';
import 'jsr:@std/dotenv/load';

import candidatesRoute from './route/route.ts';

const app = new Application();
const router = new Router();

app.use(
  oakCors({
    origin: (origin) => {
      if (origin?.includes('vercel.app') || origin?.includes('localhost')) {
        return origin;
      }
      return false;
    }, // In production, replace with the frontend domain
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
