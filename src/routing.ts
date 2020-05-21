import { Router } from "https://deno.land/x/oak/mod.ts";

import PokemonController from './app/controllers/PokemonController.ts';

const router = new Router();

router
  .get("/pokemons", PokemonController.index)

export default router;
