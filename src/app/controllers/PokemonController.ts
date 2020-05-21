import { Request, Response } from "https://deno.land/x/oak/mod.ts";

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

    if (!findPokemon) {
      response.status = 404;
      response.body = {
        status: "error",
        message: `Cannot find pokemon with name ${params.name}`,
      };

      return;
    }

    response.status = 200;
    response.body = findPokemon;
  }

  public async store({
    request,
    response,
  }: {
    request: Request
    response: Response
  }) {
    const body = await request.body();
    const { name, age, abilities } = body.value;

    const pokemon = { name, age, abilities };
    pokemons.push(pokemon);

    response.status = 201;
    response.body = pokemon;
  }

  public async put({
    params,
    request,
    response
  }: {
    params: Pick<Pokemon, 'name'>,
    request: Request,
    response: Response
  }){
    const findPokemonIndex = pokemons.findIndex((pokemon) =>
      pokemon.name.toLowerCase() === params.name.toLowerCase()
    );

    if (findPokemonIndex < 0) {
      response.status = 404
      response.body = {
        status: "error",
        message: `Cannot find pokemon with name ${params.name}`,
      };

      return;
    }

    const body = await request.body();
    const { name, age, abilities } = body.value;

    const updatedPokemon = {
      ...(name ? [name] : []),
      ...(age ? [age] : []),
      ...(abilities ? [abilities] : []),
    }

    pokemons[0] = {
      ...pokemons[0],
      ...updatedPokemon
    }

    response.status = 200
    response.body = updatedPokemon
  }
}

export default new PokemonController();
