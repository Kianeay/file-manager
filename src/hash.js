import { createHash } from 'crypto';
import { resolve } from 'path';
import { createReadStream } from 'fs';
import currentDirectory from './currentDirectory.js';

export const hash = (dir) => {
  try {
    const path = resolve(dir);
    const file = createReadStream(path);
    const hash = createHash('sha256');
    hash.setEncoding('hex');

    file.on('end', () => {
      hash.end();
      console.log(hash.read());
      currentDirectory();
    });

    file.pipe(hash);
  } catch (error) {
    console.log('Operation failed');
  }
};
