import 'jsr:@std/dotenv/load';

import app from './server.ts';

export default {
  async fetch(request: Request): Promise<Response> {
    // Get environment variables
    const databaseUrl = Deno.env.get('DATABASE_URL');
    const databaseApiKey = Deno.env.get('DATABASE_API_KEY');

    // Set environment variables if they're passed from Deno Deploy
    if (databaseUrl) {
      Deno.env.set('DATABASE_URL', databaseUrl);
    }
    if (databaseApiKey) {
      Deno.env.set('DATABASE_API_KEY', databaseApiKey);
    }

    return (
      (await app.handle(request)) ?? new Response('Not Found', { status: 404 })
    );
  },
};

// If running locally, start the server
if (import.meta.main) {
  Deno.serve(async (req) => {
    return (
      (await app.handle(req)) ?? new Response('Not Found', { status: 404 })
    );
  });
}
