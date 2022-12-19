import { argv, exit } from 'node:process';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline';
import currentDirectory from './currentDirectory';

const rl = readline.createInterface({ input, output });

const userName = argv.slice(2)[0]
  ? argv.slice(2)[0].split('=').slice(1)[0]
  : '';

if (!userName) {
  console.log(`please, write your --username`);
  process.exit(0);
} else console.log(`Welcome to the File Manager, ${userName}!`);

currentDirectory();

rl.on('line', (line) => {
  console.log(line);
})
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    exit();
  })
  .on('error', (error) => {
    console.log(error);
  });
