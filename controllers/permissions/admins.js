const Admin = require("../../models/permissions/admin");

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

      const auth =  await Admin.findOne({email: req.body.emailloginadm})
      if(!auth){
          return res.status(400).send("Admin Inexistente")
      }

      try{
          if(auth.senha != req.body.passwordloginadm){
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

      const { nomeadmin, passwordadmin, emailadmin } = req.body;
      console.log(emailadmin)
      console.log(req.body.emailadm)
      const authuser = await Admin.findOne({email: req.body.emailadm});

      if(authuser){
          return res.status(400).send("Email de Admin ja existente")
      }

      new Admin({
          nome:req.body.nameadm,
          senha:req.body.passwordadm,
          email:req.body.emailadm
      }).save().then(()=>{
          res.status(201).send("Criado com sucesso")
      }).catch((err)=>{
          res.send("Erro ao criar Admin "+ err)
      })

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
