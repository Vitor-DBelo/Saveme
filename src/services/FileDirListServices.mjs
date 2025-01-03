import fs from 'fs/promises';

import path from 'path';

import chalk from 'chalk';


// Comando saveme ls: lista arquivos e subdiretórios
async function ls(directory) {
    try {
        const files = await fs.readdir(path.join(directory));
        console.log('directory content: ');

        files.forEach(file => {
            console.log(chalk.green(' ' + file));
        });
    } catch (err) {
        console.error(chalk.red('Error listing directory files: '+ err.message));
    }
}

// Teste manual (descomente para testar)
//ls(__rootDirectory);


export default ls