import { argv, exit } from 'node:process';
import { stdin as input, stdout as output, chdir } from 'node:process';
import readline from 'node:readline';
import currentDirectory from './currentDirectory.js';
import { homedir } from 'node:os';

import { up, cd, ls } from './navigation.js';

const rl = readline.createInterface({ input, output });

chdir(homedir());

const userName = argv.slice(2)[0]
  ? argv.slice(2)[0].split('=').slice(1)[0]
  : '';

if (!userName) {
  console.log(`please, write your --username`);
  process.exit(0);
} else console.log(`Welcome to the File Manager, ${userName}!`);

currentDirectory();

rl.on('line', (line) => {
  let operations = line.split(' ');
  const command = operations[0];

  switch (command) {
    case 'up':
      up();
      break;

    case 'cd':
      cd(operations[1]);
      break;

    case 'ls':
      ls();
      break;
  }
})
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    exit();
  })
  .on('error', (error) => {
    console.log(error);
  });
