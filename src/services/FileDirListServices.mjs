import fs from 'fs/promises';

import path from 'path';



// Comando saveme ls: lista arquivos e subdiretórios
async function ls(directory) {
    try {
        const files = await fs.readdir(path.join(directory));
        console.log('directory content: ');

        files.forEach(file => {
            console.log(' ' + file);
        });
    } catch (err) {
        console.error('Error listing directory files: '+ err.message);
    }
}

// Teste manual (descomente para testar)
//ls(__rootDirectory);


export default ls