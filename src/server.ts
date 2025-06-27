import { api } from "./api/api";
import { UserRepository } from "./db/repositories/UserRepository";
import { serverStates } from "./server.states";
import { env } from "./shared/utils/env";
import { poll } from "./shared/utils/poller";

serverStates.database.initialize().then(async () => {
  console.log("Database connected successfully.");
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
