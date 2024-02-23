const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
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

module.exports = mongoose.model('admins', AdminSchema)
