require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const agendaRoutes = require('./rotas/agenda');
app.use(cors());
app.use(express.json());


const Agenda = require('./models/agenda');
const { ConsoleReporter } = require('jasmine');


//String de Conexão com o Mongo
mongoose.connect(`mongodb+srv://UserAdmRUOKAY:ruokay.usjt21@cluster0.qwnzm.mongodb.net/RUOKAYDatabase?retryWrites=true&w=majority`)
.then(() => {
  console.log("Conectado com Sucesso");
}).catch(() => {
  console.log("Erro ao conectar");
})


const agenda = [
  {
    id: '1',
    data: '01/01/2021',
    hora: '01:32 AM',

  }
]

app.use('/api/agenda', agendaRoutes);

app.use('/api/agenda', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    agenda: agenda
  });
});

module.exports = app;

