import fs from 'fs/promises';

import path from 'path';

import chalk from 'chalk';


// Comando saveme ls -t: lista arquivos, subdiretórios e conteúdo interno
async function lsT(directory, indent = 0) {
    try {
        const ArqDir = await fs.readdir(directory, { withFileTypes: true });

        for (const arqDir of ArqDir) {
            const fullPath = path.join(directory, arqDir.name);

            if (arqDir.isDirectory()) {
                console.log(chalk.blue(' '.repeat(indent) + arqDir.name));
                await lsT(fullPath, indent + 2); // Recursão
            } else {
                console.log(chalk.green(' '.repeat(indent) + arqDir.name));
            }
        }
    } catch (err) {
        console.error(chalk.red(`Error accessing directory: "${directory}": ${err.message}`));
    }
}

// Teste manual (descomente para testar)
//lsT(__rootDirectory);

export default lsT