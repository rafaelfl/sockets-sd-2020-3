const net = require('net');

// cria objeto do tipo socket utilizado para
// realizar comunicação entre cliente e servidor
const socket = net.Socket();

// função que trata todos os eventos da conexão no cliente
function realizaConexao () {
    // imprime msg na tela
    console.log("Conectado!");

    // envio "MENSAGEM2" para o servidor
    socket.write("MENSAGEM2");

    // código que executa quando dados são recebidos
    socket.on("data", function (dados) {
        const resposta = dados.toString().trim();

        // imprime mensagem recebida
        console.log(resposta);

        // encerro a conexão
        socket.end();
    });
}

// realiza a conexão com o servidor
socket.connect(2000, "127.0.0.1", realizaConexao);