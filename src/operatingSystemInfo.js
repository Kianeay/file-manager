import { EOL, cpus, userInfo, homedir } from 'node:os';
import { arch } from 'process';
import currentDirectory from './currentDirectory.js';

export const os = (operation) => {
  try {
    switch (operation) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;

      case '--cpus':
        console.table(cpus());
        break;

      case '--homedir':
        console.log(homedir());
        break;

      case '--username':
        console.log(userInfo().username);
        break;

      case '--architecture':
        console.log(arch);
        break;

      default:
        throw new Error('Invalid input');
    }

    currentDirectory();
  } catch (error) {
    console.log(error);
  }
};
