import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Definir caminhos globais
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootDirectory = path.dirname(__dirname);
const currentDir = process.cwd();

async function init(){
    console.log(`Current working directory: ${currentDir}`);
    console.log(`Current directory name: ${path.basename(currentDir)}`);
};

export {init, currentDir}

