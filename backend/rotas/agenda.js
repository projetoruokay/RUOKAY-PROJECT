const express = require('express');
const router = express.Router();
const Agenda = require('../models/agenda');

router.post('', (req, res, next) => {
  const agenda = new Agenda({
    data: req.body.data,
    hora: req.body.hora
  })
  agenda.save().then((agenda) => {
    console.log(agenda);
    res.status(201).json({
      mensagem: 'Agenda inserida',
      id: agendaeInserida._id
    });
  });
});


module.exports =router;

