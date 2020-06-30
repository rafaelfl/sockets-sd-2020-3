const net = require('net');
const readline = require('readline');

const server = net.Socket();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizaConexao(socket) {
  console.log('=================');
  console.log('0 - Feijoada');
  console.log('1 - Paçoca');
  console.log('2 - Farofa');
  console.log('3 - Peixada');

  rl.question('Insira uma opcao: ', function (opcao) {
    socket.write(opcao);
    rl.close();
  });

  rl.question('Deseja excluir um item? ', function (opcao) {
    socket.write(opcao);
  });
}

server.connect(2000, '127.0.0.1', realizaConexao);
