import { Response } from "https://deno.land/x/oak/mod.ts";

import pokemons from "../data.ts";

class PokemonController {
  public async index({ response }: { response: Response }){
    response.body = pokemons;
  };
}

export default new PokemonController();
