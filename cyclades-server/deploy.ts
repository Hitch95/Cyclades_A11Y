import app from './server.ts';

export default async (request: Request) => {
  const databaseUrl = Deno.env.get('DATABASE_URL');
  const databaseApiKey = Deno.env.get('DATABASE_API_KEY');

  if (databaseUrl) {
    Deno.env.set('DATABASE_URL', databaseUrl);
  }
  if (databaseApiKey) {
    Deno.env.set('DATABASE_API_KEY', databaseApiKey);
  }

  return (
    (await app.handle(request)) ?? new Response('Not Found', { status: 404 })
  );
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
