import app from './server.ts';

const PORT = 8000;

// Convert Oak application to compatible request handler
Deno.serve({ port: PORT, hostname: '0.0.0.0' }, async (req) => {
  return (await app.handle(req)) ?? new Response('Not Found', { status: 404 });
});
