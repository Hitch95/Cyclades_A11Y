export {};

const process = Deno.run({
  cmd: ['deno', 'run', '--allow-all', 'deploy.ts'],
  stdout: 'inherit',
  stderr: 'inherit',
});

const status = await process.status();
process.close();

if (!status.success) {
  Deno.exit(status.code);
}
