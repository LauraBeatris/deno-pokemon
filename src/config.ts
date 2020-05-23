import { config } from "https://deno.land/x/dotenv/mod.ts";

config({ export: true });

const env = {
  APP_HOST: Deno.env.get("APP_HOST") || "127.0.0.1",
  APP_PORT: Deno.env.get("APP_PORT") || 3333,
};

export default env;
