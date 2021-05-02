
//Efetuando a importação do pacote Mongoose
const mongoose = require ('mongoose');

//Definição do "Schema"

const agendachema = mongoose.Schema ({
    data: {type: Date, required: true},
    hora: {type: String, required: true}

});


module.exports = mongoose.model('Agenda', agendachema);