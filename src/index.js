import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

import ls from './services/FileDirListServices.mjs';
import lsT from './services/AllListScannerServices.mjs';
import copy from './services/CopyServices.mjs';

// Definir caminhos globais
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootDirectory = path.dirname(__dirname);

(async () => {
    console.log(`Directory: ` + chalk.blue(path.basename(__rootDirectory)));
    console.log(`Directory path: ` + chalk.blue(__rootDirectory));
})();

export default __rootDirectory