/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

const PORT = 8080;
const connections = [];
let idConnect = 0;

const messagem = (from, message) => {
  connections.forEach((connection) => {
    if (connection.guest === from) return;
    connection.write(message);
  }) 
}

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  idConnect++;

  connection.guest = 'Connection' + idConnect;
  connections.push(connection)

  messagem(connection.guest, `${connection.guest} entrou no servidor`);

  console.log('Cliente conectado');

  server.getConnections((_err, count) => {
    console.log(count);
  })

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  // connection.on('end', () => {
  //   console.log('Cliente desconectado');
  // });

  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
