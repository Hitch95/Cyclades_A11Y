import { Application, Router } from 'jsr:@oak/oak';
import { oakCors } from '@tajpouria/cors';

import candidatesRoute from './route/route.ts';

const app = new Application();
const router = new Router();
const PORT = 8000;

candidatesRoute(router);

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on http://localhost:${PORT}`);

await app.listen({ port: PORT });

// Export the app instance for testing
export default app;
