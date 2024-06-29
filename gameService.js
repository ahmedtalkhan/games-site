export default class GameService {
  constructor() {
    this.apiKey = "5aeb0e51c7msh664dc5e070e64fcp17cdf1jsna6c8d7331a47";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
    this.endpoint = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  }

  async getGames() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };

    try {
      const response = await fetch(this.endpoint, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];
    }
  }
}
