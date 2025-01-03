import readline from 'readline';

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

export default getInput