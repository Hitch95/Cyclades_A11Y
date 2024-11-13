export {};

const args = Deno.args;
const command = new Deno.Command('deno', {
  args: ['run', '--allow-all', 'deploy.ts', ...args],
  stdout: 'inherit',
  stderr: 'inherit',
});

const process = command.spawn();
const status = await process.status;

if (!status.success) {
  Deno.exit(status.code);
}
