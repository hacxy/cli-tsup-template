#!/usr/bin/env node
import chalk from 'chalk';

let name = '';

process.argv.find((arg, index, args) => {
  if (arg === '--name') {
    name = args[index + 1];
  }
});

const message = chalk.green(`🥳 Hello ${name}! Welcome to use the CLI Tsup App template.`);
console.log(message);
