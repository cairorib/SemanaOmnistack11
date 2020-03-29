// importando as funcionalidades do express
const express = require ('express');

const routes = require('./routes');

const app = express();

const cors=require('cors');

app.use(cors());
app.use(express.json());

app.use(routes);

// criando a primeira rota
/*
app.get('/', (request, response)=> {
  return response.json({
    evento:" ALELUIA",
    aluno:"Cairo Ribeiro "
  });
});

app.listen(3333);
*/

 app.listen(3333);