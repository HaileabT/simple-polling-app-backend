import { createClient } from "redis";

const client = createClient();

client.on("error", () => {
  console.log("Error when trying to connect to the cache database.");
});

export { client as cacheClient };
