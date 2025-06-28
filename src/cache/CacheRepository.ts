import { serverStates } from "../server.states";
import { PollCache } from "./types/PollCache";

const { cache } = serverStates;
const _CACHE_EXP_TIME = 3600 * 24 * 30 * 12 * 5;

class CacheRepository<T = any> {
  private static cacheClient: object | null = null;
  private static repo: CacheRepository<any> | null = null;
  private constructor() {}

  public static getRepository<R>() {
    if (!this.repo) {
      this.repo = new CacheRepository<R>();
    }

    return this.repo as CacheRepository<R>;
  }

  async create(object: T) {
    cache.setEx;
  }

  async find(key: string) {}

  async update(key: string, object: T) {}

  async delete(key: string) {}
}

export const pollCacheRepository = CacheRepository.getRepository<PollCache>();
