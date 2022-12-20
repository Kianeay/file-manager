import currentDirectory from './currentDirectory.js';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { writeFile, rename, unlink } from 'fs/promises';
import { cwd } from 'node:process';
import path from 'path';

export const cat = async (dir) => {
  try {
    const path = resolve(dir);
    const readableStream = createReadStream(path, { encoding: 'utf-8' });

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export const add = async (name) => {
  const path = resolve(cwd(), name);
  try {
    writeFile(path, '', {
      encoding: 'utf8',
      flag: 'w',
      mode: 0o666,
    });

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export const rn = async (dir, name) => {
  const newFile = path.dirname(dir);
  const prevPath = resolve(dir);
  const newPath = path.join(newFile, name);

  try {
    rename(prevPath, newPath);

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export const rm = async (dir) => {
  try {
    const file = resolve(dir);
    await unlink(file);

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};
