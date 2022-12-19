import { argv } from 'node:process';

const userName = argv.slice(2)[0]
  ? argv.slice(2)[0].split('=').slice(1)[0]
  : '';

if (!userName) {
  console.log(`please, write your --username`);
  process.exit(0);
} else console.log(`Welcome to the File Manager, ${userName}!`);
