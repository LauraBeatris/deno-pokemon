import { config } from "https://deno.land/x/dotenv/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

config();

import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routing.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${APP_PORT}... 🧨`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
