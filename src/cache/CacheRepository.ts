import { cacheClient as cache } from "./cache.client";
import { PollCache } from "./types/PollCache";

const _CACHE_EXP_TIME = 3600 * 24 * 30 * 12 * 5;

class CacheRepository<T = any> {
  private static repo: CacheRepository<any> | null = null;
  private constructor() {}

  public static getRepository<R>() {
    if (!this.repo) {
      this.repo = new CacheRepository<R>();
    }

    return this.repo as CacheRepository<R>;
  }

  async create(key: string, object: T) {
    const data = await cache.setEx(key, _CACHE_EXP_TIME, JSON.stringify(object));

    return object;
  }

  async find(key: string) {
    const data = await cache.get(key);
    return JSON.parse(data || "") as T;
  }

  async update(key: string, object: T) {
    const data = await cache.setEx(key, _CACHE_EXP_TIME, JSON.stringify(object));

    return await cache.get(key);
  }

  async delete(key: string) {
    return await cache.del(key);
  }
}

export const pollCacheRepository = CacheRepository.getRepository<PollCache>();
