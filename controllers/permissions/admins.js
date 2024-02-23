const Admin = require("../../models/permissions/admin");
const nodemailer = require('nodemailer')

class AdminController {
  async showall(req,res){

      try{
          const auth = await Admin.find();
          return res.json(auth).status(200);
      }
      catch(err){
          res.status(500).send(err)
      }
  }

  async showid(req,res){

      try{
          const {id}= req.params;
          const auth = await Admin.findById(id);

          if(auth!=null){
              return res.json(auth).status(200);
          }
          else{
              return res.status(400).send("Admin Inexistente")
          }
      }
      catch(err){
          res.status(500).send(err)
      }
}

  async login(req,res){

      const auth =  await Admin.findOne({email: req.body.email})
      if(!auth){
          return res.status(400).send("Admin Inexistente")
      }

      try{
          if(auth.senha != req.body.senha){
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

      const authuser = await Admin.findOne({email: req.body.email});

      if(authuser){
          return res.status(400).send("Email de Admin ja existente")
      }

      new Admin({
          nome:req.body.nome,
          senha:req.body.senha,
          email:req.body.email
      }).save().then(()=>{
          res.status(201).send("Criado com sucesso")
      }).catch((err)=>{
          res.send("Erro ao criar Admin "+ err)
      })

      const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth: {
          user: "gianlucasmantrao@gmail.com", 
          pass: "",
        },
      });

      await transporter.sendMail({
        from: "teste gianlucasmantrao@gmail.com", 
        to: req.body.email, 
        subject: "Confirmação!", 
        text: "Confirmado",
      }).then(res=>
        console.log(res),
        transporter.close()
        ).catch(error=>
            console.log(error),
            transporter.close() 
        )



  }

  async delete(req,res){

    const {id}= req.params;
    const authuser = await Admin.findById(id);

    try{
        if(authuser){
            await Admin.deleteOne(authuser);

            return res.status(201).json({
                msg:"FOI"
            })
        }
        else{
            return res.status(400).send("Admin Inexistente");
        }
    }
    catch(err){
        return res.status(500).send(err);
    }

}
}
module.exports = new AdminController();
