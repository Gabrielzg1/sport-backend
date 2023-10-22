const axios = require("axios");

const options = {
  method: "GET",
  url: "https://soccer-football-info.p.rapidapi.com/players/list/",
  params: { c: "all", p: "12" },
  headers: {
    "X-RapidAPI-Key": "e27601f73amsh5e8a91c0932b9b8p1f07cbjsnde0f7a673ca3",
    "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
  },
};

const fetch = async () => {
  try {
    const response = await axios.request(options);

    // Supondo que os jogadores estejam em response.data.players
    const playerNames = response.data.result.map((result) => result.name);

    console.log("Lista de jogadores:");
    playerNames.forEach((name) => console.log(name));

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
