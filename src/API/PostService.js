import axios from "axios";

export class PostService {
  static async getHero(nameHero) {
    try {
      const response = await axios.get(
        `https://superheroapi.com/api.php/3373053449671680/search/${nameHero}`
      );
      if (!response) throw new Error("Ooops...");
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
