// deploy_wrapper.ts
export {};

const { run } = Deno;
const p = run({
  cmd: ['deno', 'run', '--allow-all', 'deploy.ts'],
});
await p.status();
