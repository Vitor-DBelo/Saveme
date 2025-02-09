import fs from 'fs/promises';

import path from 'path';

import getInput from './utils/public/DataPromptReader.mjs'


// Comando saveme copy: copia o diretório para outro destino, salva por cima de arquivos 
async function copy(directory, caminho) {
    const inputCaminho = await getInput('Inform wherever the copy is saved: ');
    const caminhoDestino = inputCaminho.trim() === '' ? null : inputCaminho;

    const caminhoPadrao = path.join('C:', 'saveme copy');
    const destino = caminhoDestino === null ? caminhoPadrao : caminhoDestino;

    const nameDirCopy = path.join(destino, path.basename(directory));

    try {
        await fs.mkdir(nameDirCopy, { recursive: true });
        await fs.cp(directory, nameDirCopy, { recursive: true });
        console.log('Directory successfully copied to: ', destino);
    } catch (err) {
        console.error('Error copying directory: ', err.message);
    }
}


// Teste manual (descomente para testar)
//await copy(__rootDirectory);

export default copy