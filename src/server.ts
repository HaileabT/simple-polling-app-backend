import { api } from "./api/api";
import { serverStates } from "./server.states";
import { env } from "./shared/utils/env";
import { poll } from "./shared/utils/poller";

serverStates.database.initialize().then(async () => {
  console.log("Database connected successfully.");
});

serverStates.cache
  .connect()
  .then(() => {
    console.log("Cache connection success.");
  })
  .catch((err) => {
    console.log("Error connecting to the cache", err);
  });

api.listen(env.APP_PORT, async () => {
  await poll<void>(
    () => {
      if (serverStates.database.isInitialized) return { breakPoll: true };
      else return { breakPoll: false };
    },
    3000,
    30000,
    {
      messageBetweenEachPoll: "Server is trying to connect with database",
      messageWhenPollIsSuccessful: "Server connected to database",
    }
  );
  console.log("Server up and running on port", env.APP_PORT);
});
