import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import currentDirectory from './currentDirectory.js';

export const compress = async (file, dest) => {
  try {
    const file = resolve(dir);

    const readableStream = createReadStream(file);
    const writableStream = createWriteStream(dest);
    const brotliCompress = createBrotliCompress();

    currentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};
