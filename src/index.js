import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import readline from 'readline';

// Definir caminhos globais
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootDirectory = path.dirname(__dirname);

(async () => {
    console.log(`Directory: ` + chalk.blue(path.basename(__rootDirectory)));
    console.log(`Directory path: ` + chalk.blue(__rootDirectory));
})();

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
ls(__rootDirectory);

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

// Função para entrada do usuário
function getInput(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

// Comando saveme copy: copia o diretório para outro destino, salva por cima de arquivos 
async function copy(file) {
    const inputCaminho = await getInput('Inform wherever the copy is saved: ');
    const caminho = inputCaminho.trim() === '' ? null : inputCaminho;

    const caminhoPadrao = path.join('C:', 'saveme_copy');
    const destino = caminho === null ? caminhoPadrao : caminho;

    const nameDirCopy = path.join(destino, path.basename(file));

    try {
        await fs.mkdir(nameDirCopy, { recursive: true });
        await fs.cp(file, nameDirCopy, { recursive: true });
        console.log(chalk.green('Directory successfully copied to: ', destino));
    } catch (err) {
        console.error(chalk.red('Error copying directory: ', err.message));
    }
}

// Teste manual (descomente para testar)
// await copy(__rootDirectory);
