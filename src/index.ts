import { Application } from "https://deno.land/x/oak/mod.ts";
import env from "./config.ts";
import router from "./routing.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${env.APP_PORT}... 🧨`);
await app.listen(`${env.APP_HOST}:${env.APP_PORT}`);
