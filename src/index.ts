#!/usr/bin/env node
import chalk from 'chalk';
import prompts from 'prompts';
let name = '';

process.argv.find((arg, index, args) => {
  if (arg === '--name') {
    name = args[index + 1];
  }
});

const bootstrap = async () => {
  await prompts({
    type: name ? null : 'text',
    name: 'name',
    message: 'Your name: ',
    onState(stage) {
      name = stage.value;
    }
  });

  const message = chalk.green(`🥳 Hello ${name}! Welcome to use the CLI Tsup Template.`);
  console.log(message);
};

bootstrap();
