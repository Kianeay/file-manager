import { chdir } from 'node:process';
import currentDirectory from './currentDirectory.js';
import { readdir } from 'fs/promises';
import { cwd } from 'node:process';

export const up = async () => {
  try {
    chdir('..');
    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export const cd = async (dir) => {
  try {
    chdir(dir);
    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export const ls = async () => {
  try {
    let dir = cwd();
    let array = [];

    const files = await readdir(dir, { withFileTypes: true });

    files.forEach((file) => {
      let obj = {
        Name: file.name,
        Type: file.isDirectory() ? 'directory' : 'file',
      };

      array.push(obj);
    });

    array.sort((a, b) => a.Type.localeCompare(b.Type));
    console.table(array);

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};
