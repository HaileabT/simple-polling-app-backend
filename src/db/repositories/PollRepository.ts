import { appDataSource } from "../datasource";
import { PollEntity } from "../entities/PollEntity";

export class PollRepository {
  private static ormRepo = appDataSource.getRepository(PollEntity);
  private static repo: PollEntity | null = null;

  private constructor() {}

  public static getRepository() {
    if (!this.repo) {
      this.repo = new PollEntity();
    }

    return this.repo;
  }

  async create(poll: Partial<PollEntity>) {
    const savedPoll = await PollRepository.ormRepo.save(poll);
    return savedPoll;
  }

  async update(poll: Partial<PollEntity> & { id: string }) {
    await PollRepository.ormRepo.update(poll.id, poll);
    return await PollRepository.ormRepo.findBy({ id: poll.id });
  }

  async delete(pollId: string) {
    const poll = await PollRepository.ormRepo.findBy({ id: pollId });
    await PollRepository.ormRepo.delete(pollId);
    return poll;
  }
}
