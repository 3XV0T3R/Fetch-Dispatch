const readline = require('readline');

// Cria uma interface para entrada e saída do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para exibir uma mensagem com um delay
const displayMessage = (message, delay = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
};

// Função principal que exibe as mensagens
const main = async () => {
    console.log('----------------------------------------');
    console.log('   Bem-vindo ao instalador do Fetch & Dispatch!');
    console.log('----------------------------------------');

    await displayMessage('O Fetch & Dispatch é uma ferramenta para automatizar o scraping e a postagem de imagens em canais via webhooks.');
    await displayMessage('Com ele, você pode configurar webhooks, tokens e IDs de forma fácil e rápida.', 2000);

    await displayMessage('Para obter acesso completo à ferramenta e suporte adicional, siga os seguintes passos:');
    await displayMessage('1. Entre no servidor oficial do Discord: https://discord.gg/9MBRne88mY', 2000);
    await displayMessage('2. Entre em contato com o usuário SuporteFD para obter ajuda e informações adicionais.', 2000);

    await displayMessage('A instalação está concluída. Se precisar de assistência, não hesite em buscar ajuda no servidor Discord.', 2000);

    await displayMessage('--------------------------------------------------------');
    await displayMessage('Para começar a utilizar a ferramenta, consulte a documentação no repositório GitHub:');
    await displayMessage('https://github.com/3XV0T3R/Fetch-Dispatch/, 2000);
    await displayMessage('--------------------------------------------------------', 2000);

    // Encerra a interface de leitura
    rl.close();
};

// Executa a função principal
main();
