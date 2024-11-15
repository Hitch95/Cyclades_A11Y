import app from './server.ts';

// Export Deno Deploy handler
export default {
  async fetch(request: Request, env: Record<string, string>) {
    // Set environment variables if they're passed from Deno Deploy
    if (env.DATABASE_URL) Deno.env.set('DATABASE_URL', env.DATABASE_URL);
    if (env.DATABASE_API_KEY) {
      Deno.env.set('DATABASE_API_KEY', env.DATABASE_API_KEY);
    }

    return (
      (await app.handle(request)) ?? new Response('Not Found', { status: 404 })
    );
  },
};

// If running locally, start the server
if (import.meta.main) {
  const port = 8000;
  Deno.serve({ port }, async (req) => {
    return (
      (await app.handle(req)) ?? new Response('Not Found', { status: 404 })
    );
  });
}
