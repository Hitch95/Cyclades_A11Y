import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

import { setupDatabase, db } from './database.ts';
import { candidatesRoute } from './route.ts';

setupDatabase();

const app = new Application();
const router = new Router();

// // Logging middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.request.method} ${ctx.request.url.pathname} - ${ms}ms`);
});

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error('Server error:', err);
    ctx.response.status = 500;
    ctx.response.body = {
      error: 'Internal server error',
      message: err.message,
    };
  }
});

app.use(
  oakCors({
    origin: '*', // In production, replace with your frontend domain
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
  })
);

// Routes configuration
router
  .get('/candidates', candidatesRoute)
  .get('/candidates/:id', candidatesRoute);

// Add router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// 404 handler for unmatched routes
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: 'Not Found' };
});

// Graceful shutdown handling
const controller = new AbortController();
const { signal } = controller;

function shutdown() {
  try {
    db?.close(); // Close database connection
    controller.abort();
    console.log('\nShutting down server...');
    Deno.exit(0);
  } catch (err) {
    console.error('Error during shutdown:', err);
    Deno.exit(1);
  }
}

// Handle shutdown signals
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  Deno.addSignalListener(signal, () => shutdown());
}

// Server configuration
const serverConfig = {
  port: 8000,
  hostname: 'localhost',
  signal,
};

console.log(
  `Starting server on http://${serverConfig.hostname}:${serverConfig.port}`
);

try {
  await app.listen(serverConfig);
} catch (error) {
  if (!(error instanceof TypeError && error.message.includes('aborted'))) {
    console.error('Server error:', error);
    shutdown();
  }
}
