import { cacheClient } from "./cache/cache.client";
import { appDataSource } from "./db/datasource";

export const serverStates = {
  database: appDataSource,
  cache: cacheClient,
};
