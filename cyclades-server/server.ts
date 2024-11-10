import { Application, Router } from 'jsr:@oak/oak';
import { oakCors } from '@tajpouria/cors';

import candidatesRoute from './route/route.ts';

const app = new Application();
const router = new Router();
const PORT = 8000;

app.use(
  oakCors({
    origin: '*', // In production, replace with your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
  })
);
app.use(router.routes());
app.use(router.allowedMethods());
candidatesRoute(router);

// 404 handler for unmatched routes
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: 'Not Found' };
});

console.log(`Server is running on http://localhost:${PORT}`);

await app.listen({ port: PORT });

// Export the app instance for testing
export default app;
