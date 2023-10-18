const Review = require("../../models/permissions/review")

class ReviewController {
    async showall(req,res){
  
        try{
            const auth = await Review.find();
            return res.json(auth).status(200);
        }
        catch(err){
            res.status(500).send(err)
        }
    }
  
    async register(req,res){
  
        new Review({
            review:req.body.review
        }).save().then(()=>{
            res.status(201).send("Criado com sucesso")
        }).catch((err)=>{
            res.send("Erro ao criar Review "+ err)
        })
    }
  
    async delete(req,res){
  
      const {id}= req.params;
      const authrev= await Review.findById(id);
  
      try{
          if(authrev){
              await Review.deleteOne(authrev);
  
              return res.status(201).json({
                  msg:"FOI"
              })
          }
          else{
              return res.status(400).send("Review Inexistente");
          }
      }
      catch(err){
          return res.status(500).send(err);
      }
  
  }
  }
  module.exports = new ReviewController();