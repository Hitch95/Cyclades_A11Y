import app from './server.ts';

// Check if we're running on Deno Deploy
const isDeploy = Deno.env.get('DENO_DEPLOYMENT_ID') !== undefined;

if (isDeploy) {
  // Configuration for Deno Deploy
  Deno.serve(async (req) => {
    return (
      (await app.handle(req)) ?? new Response('Not Found', { status: 404 })
    );
  });
} else {
  // Configuration for local development
  const PORT = 8000;

  // Convert Oak application to compatible request handler
  Deno.serve(async (req) => {
    return (
      (await app.handle(req)) ?? new Response('Not Found', { status: 404 })
    );
  });
}
