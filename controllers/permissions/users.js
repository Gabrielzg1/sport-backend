const express = require('express')
const Usuario = require("../../models/permissions/user")

class UsuarioController{


    async showall(req,res){

        try{
            const auth = await Usuario.find();
            return res.json(auth).status(200);
        }
        catch(err){
            res.status(500).send(err)
        }
    }

    async showid(req,res){

        try{
            const {id}= req.params;
            const auth = await Usuario.findById(id);

            if(auth!=null){
                return res.json(auth).status(200);
            }
            else{
                return res.status(400).send("Usuario Inexistente")
            }
        }
        catch(err){
            res.status(500).send(err)
        }
    }

    async login(req,res){


        const { email, password } = req.body;
        const auth = await Usuario.findOne({email: req.body.emaillogin})  
        
        if(!auth){
            return res.status(400).send("Usuario Inexistente")
        }

        try{
            if(auth.senha !== req.body.passwordlogin){
                res.send("Senha incorreta!")
            }
            else{
                res.send("Logado com sucesso")
            }

        }
        catch(error){
            res.status(500).send("Erro: "+ error)
        }
    }

    async register(req,res){

        const authuser = await Usuario.findOne({email: req.body.email});

        if(authuser){
            return res.status(400).send("Email de Usuario ja existente")
        }

        new Usuario({
            nome:req.body.name,
            senha:req.body.password,
            email:req.body.email
        }).save().then(()=>{
           return res.status(201).send("Criado com sucesso")
        }).catch((err)=>{
            console.log(err)
           return res.send("Erro ao criar usuario "+ err)
        })

    }

    async delete(req,res){

        const {id}= req.params;
        const authuser = await Usuario.findById(id);

        try{
            if(authuser){
                await Usuario.deleteOne(authuser);

                return res.status(201).json({
                    msg:"FOI"
                })
            }
            else{
                return res.status(400).send("Usuario Inexistente");
            }
        }
        catch(err){
            return res.status(500).send(err);
        }

    }
}

module.exports = new UsuarioController();