const net = require('net');

// função que trata todos os eventos da conexão no servidor
function trataRequisicoes (socket) {
    // imprime mensagem ao conectar
    console.log("Conexão realizada!");

    // código que executa quando a conexão é encerrada
    socket.on("end", function () {
        console.log("Conexão finalizada!");
    });

    // código que executa quando dados são recebidos
    socket.on("data", function (dados) {
        const comando = dados.toString();

        // testa quais os tipos de comandos válidos recebidos
        switch (comando) {
            case "MENSAGEM1":
                socket.write("Bom dia!\n");
                break;

            case "MENSAGEM2":
                socket.write("Boa tarde\n")
                break;


            case "MENSAGEM3":
                socket.write("Boa noite\n");
                break;

            case "FIM":
                socket.end();
                break;

            
            default:
                const c = comando.split(" ");

                if (c[0] === "MENSAGEM") {
                    socket.write("Bom dia " + c[1]);
                } else {
                    socket.write("COMANDO DESCONHECIDO");
                }
                
        }
    });
}

// cria servidor
const server = net.createServer(trataRequisicoes);

// escuta em porta de rede
server.listen(2000, "127.0.0.1");
