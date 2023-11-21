const Suggestion = require("../../models/others/suggestion");

class SuggestionsController {
  async showall(req, res) {
    try {
      const auth = await Suggestion.find();
      return res.json(auth).status(200);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async register(req, res) {
    new Suggestion({
      playername: req.body.playername,
      suggestion: req.body.suggestion,
    })
      .save()
      .then(() => {
        res.status(201).send("Criado com sucesso");
      })
      .catch((err) => {
        res.send("Erro ao criar Sugestão " + err);
      });
  }

  async delete(req, res) {
    const { id } = req.params;
    const authrev = await Suggestion.findById(id);

    try {
      if (authrev) {
        await Suggestion.deleteOne(authrev);

        return res.status(201).json({
          msg: "FOI",
        });
      } else {
        return res.status(400).send("Sugestão Inexistente");
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
module.exports = new SuggestionsController();
