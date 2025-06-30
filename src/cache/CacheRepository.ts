import { cacheClient as cache } from "./cache.client";
import { PollCache } from "./types/PollCache";
import { VoteCache } from "./types/VoteCache";

const _CACHE_EXP_TIME = 3600 * 24 * 30 * 12 * 5;
const _SCAN_BATCH_LENGTH = 200;

class CacheRepository<T = any> {
  private static repo: CacheRepository<any> | null = null;
  private constructor(public namespace: string) {}

  public static getRepository<R>(namespace: string) {
    if (!this.repo) {
      this.repo = new CacheRepository<R>(namespace);
    }

    return this.repo as CacheRepository<R>;
  }

  async create(key: string, object: T) {
    const data = await cache.setEx(`${this.namespace}:${key}`, _CACHE_EXP_TIME, JSON.stringify(object));

    return object;
  }

  async find(key: string) {
    const data = await cache.get(`${this.namespace}:${key}`);
    return JSON.parse(data || "") as T;
  }

  async findAll() {
    let cursor = "0";
    let allRecords: T[] = [];
    do {
      const scanRes = await cache.scan(cursor, {
        MATCH: `${this.namespace}:*`,
        COUNT: _SCAN_BATCH_LENGTH,
      });
      cursor = scanRes.cursor;
      const keys = scanRes.keys;
      const recordRes = await cache.mGet(keys);
      const cleanedRec = recordRes.filter((rec) => rec !== null);
      allRecords.concat(cleanedRec.map((rec) => JSON.parse(rec) as T));
    } while (cursor != "0");
    return allRecords;
  }

  async update(key: string, object: T) {
    const data = await cache.setEx(key, _CACHE_EXP_TIME, JSON.stringify(object));

    return await cache.get(`${this.namespace}:${key}`);
  }

  async delete(key: string | string[]) {
    if (typeof key !== "string") {
      return await cache.del(key.map((k) => `${this.namespace}:${k}`));
    } else {
      return await cache.del(`${this.namespace}:${key}`);
    }
  }
}

const _POLL_CACHE_NAMESPACE = "poll-data";
const _VOTE_CACHE_NAMESPACE = "vote-data";

export const pollCacheRepository = CacheRepository.getRepository<PollCache>(_POLL_CACHE_NAMESPACE);
export const voteCacheRepository = CacheRepository.getRepository<Partial<VoteCache>>(_VOTE_CACHE_NAMESPACE);
