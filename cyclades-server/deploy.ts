import app from './server.ts';

const PORT = 8000;

Deno.serve({ port: PORT }, app.fetch);
