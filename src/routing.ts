import { Router } from "https://deno.land/x/oak/mod.ts";

import PokemonController from "./app/controllers/PokemonController.ts";
import PokemonGenerationsController from "./app/controllers/PokemonGenerationsController.ts";

const router = new Router();

router.get("/pokemons/generations", PokemonGenerationsController.index)

router
  .get("/pokemons", PokemonController.index)
  .get("/pokemons/:name", PokemonController.show)
  .post("/pokemons", PokemonController.store)
  .put("/pokemons/:name", PokemonController.put)
  .delete("/pokemons/:name", PokemonController.delete);

export default router;
