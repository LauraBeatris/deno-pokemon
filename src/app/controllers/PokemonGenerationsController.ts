import { Response } from "https://deno.land/x/oak/mod.ts";

class PokemonGamesController {
  public async index({ response }: { response: Response }) {
    try {
      let pokemons = await fetch("https://pokeapi.co//api/v2/generation/generation-i")
      pokemons = await pokemons.json()

      response.body = pokemons
    } catch (err) {
      response.status = 500
      response.body = err
    }
  }
}
export default new PokemonGamesController();
