const connection = require('./config/connection');
const app = require('./app');

const PORT = 8000;

connection().then(() => {
  console.log('Conectado ao mongodb!');
  app.listen(PORT, () => {
    console.log(`Acessar http://localhost:${PORT}`);
    console.log(`Servidor executando na porta ${PORT}`);
  });
}).catch((error) => {
  console.log(`Falha ao se conectar com o mongodb!\n ${error}`);
});
