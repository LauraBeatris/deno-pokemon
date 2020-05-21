import { Response } from "https://deno.land/x/oak/mod.ts";

import Pokemon from "../models/Pokemon.ts";
import pokemons from "../data.ts";
class PokemonController {
  public index({ response }: { response: Response }) {
    response.body = pokemons;
  }

  public show({
    params,
    response,
  }: {
    params: Pick<Pokemon, 'name'>
    response: any
  }) {
    const findPokemon = pokemons.find((pokemon) =>
      pokemon.name.toLowerCase() === params.name.toLowerCase()
    );

    console.log(findPokemon)

    if (!findPokemon) {
      response.status = 400;
      response.body = {
        status: "error",
        message: `Cannot find pokemon with name ${params.name}`,
      };

      return;
    }

    response.status = 200;
    response.body = findPokemon;
  }
}

export default new PokemonController();
