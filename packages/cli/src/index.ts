#!/usr/bin/env node
import yargs from 'yargs';
import clear from 'clear';
import figlet from 'figlet';
import { hideBin } from 'yargs/helpers';

clear();
console.log(figlet.textSync('dinasty', { horizontalLayout: 'full' }));

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands')
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help' }).argv;
