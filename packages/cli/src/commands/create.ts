import type { Arguments, CommandBuilder } from 'yargs';
import { promisify } from 'util';
import { exec } from 'node:child_process';

type Options = {
  name: string;
};

const execAsync = promisify(exec);

export const command: string = 'create <name>';
export const desc: string =
  'Create a next-app based on https://github.com/luiz-pereira-salt/sample-workspace/tree/main/packages/boilerplate';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional('name', { type: 'string', demandOption: true });

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  const { name } = argv;
  const cmd = `yarn create next-app -e https://github.com/luiz-pereira-salt/sample-workspace/tree/main/packages/boilerplate ${name}`;
  const { stdout, stderr } = await execAsync(cmd);
  process.stdout.write(stdout);
  process.exit(0);
};
