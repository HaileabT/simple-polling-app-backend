import { cacheClient } from "./cache/cache.client";
import { appDataSource } from "./db/datasource";
import { socketServer } from "./socket/socket";

export const serverStates = {
  database: appDataSource,
  cache: cacheClient,
  websocket: socketServer,
};
