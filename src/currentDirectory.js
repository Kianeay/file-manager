import { cwd } from 'node:process';

const currentDirectory = () => {
  console.log(`You are currently in ${cwd()}`);
};

export default currentDirectory;
