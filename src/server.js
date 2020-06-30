const net = require('net');

const cardapio = [
  {
    id: 0,
    item: 'Feijoada',
    valor: 40,
  },
  {
    id: 1,
    item: 'Paçoca',
    valor: 15,
  },
  {
    id: 2,
    item: 'Farofa',
    valor: 10,
  },
  {
    id: 3,
    item: 'Peixada',
    valor: 60,
  },
];
const pedidos = [];

function realizarPedido(socket) {
  socket.on('data', function (dados) {
    const opcao = parseInt(dados);

    let total = 0;

    for (let i = 0; i < pedidos.length; i++) {
      total += pedidos[i].valor;
    }

    pedidos.push(cardapio[opcao]);

    socket.write(pedidos);
    socket.write(total);
  });
  socket.on('data', function (dados) {
    const opcao = parseInt(dados);

    if (opcao > cardapio.length) {
      return false;
    }
    if (opcao < 0) {
      return false;
    }
    cardapio.splice(opcao, 1);
    return true;
  });
}

const server = net.createServer(realizarPedido);

server.listen(2000, '127.0.0.1', () => {
  console.log('Servidor rodando na porta 2000 🚀');
});
