const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require:true
    },
    senha:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model('usuarios', UsuarioSchema)