import fs from 'fs/promises';

import path from 'path';

import chalk from 'chalk';

import getInput from './utils/public/DataPromptReader.mjs'


// Comando saveme copy: copia o diretório para outro destino, salva por cima de arquivos 
async function copy(directory) {
    const inputCaminho = await getInput('Inform wherever the copy is saved: ');
    const caminho = inputCaminho.trim() === '' ? null : inputCaminho;

    const caminhoPadrao = path.join('C:', 'saveme copy');
    const destino = caminho === null ? caminhoPadrao : caminho;

    const nameDirCopy = path.join(destino, path.basename(directory));

    try {
        await fs.mkdir(nameDirCopy, { recursive: true });
        await fs.cp(directory, nameDirCopy, { recursive: true });
        console.log(chalk.green('Directory successfully copied to: ', destino));
    } catch (err) {
        console.error(chalk.red('Error copying directory: ', err.message));
    }
}


// Teste manual (descomente para testar)
//await copy(__rootDirectory);

export default copy