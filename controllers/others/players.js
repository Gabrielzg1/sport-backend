const axios = require("axios");

// api doc: https://rapidapi.com/api-sports/api/api-football/
const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
  params: {
    league: "39",
    season: "2020",
  },
  headers: {
    "X-RapidAPI-Key": "e27601f73amsh5e8a91c0932b9b8p1f07cbjsnde0f7a673ca3",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

class playersController {
  async getPlayers(req, res) {
    try {
      const response = await axios.request(options);

      // Inicializa o array vazio para armazenar os jogadores
      const players = [];

      // Itera sobre cada jogador na resposta
      for (let i = 0; i < response.data.response.length; i++) {
        const playerData = response.data.response[i];
        const player = {
          name: playerData.player.name,
          id: playerData.player.id,
          goals: playerData.statistics[0].goals.total, // Supondo que as estatísticas do jogador estão sempre no índice 0
          assists: playerData.statistics[0].goals.assists,
        };
        players.push(player);
      }

      return res.json(players).status(200);
    } catch (error) {
      console.error(error);
      return res.json({ erro: "internal server error" }).status(500);
    }
  }
}

module.exports = new playersController();
