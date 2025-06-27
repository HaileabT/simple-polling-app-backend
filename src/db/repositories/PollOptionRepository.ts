import { appDataSource } from "../datasource";
import { PollOptionEntity } from "../entities/PollOptionEntity";

export class PollOptionRepository {
  private static ormRepo = appDataSource.getRepository(PollOptionEntity);
  private static repo: PollOptionEntity | null = null;

  private constructor() {}

  public static getRepository() {
    if (!this.repo) {
      this.repo = new PollOptionEntity();
    }

    return this.repo;
  }

  async create(pollOption: Partial<PollOptionEntity>) {
    const savedPollOption = await PollOptionRepository.ormRepo.save(pollOption);
    return savedPollOption;
  }

  async update(pollOption: Partial<PollOptionEntity> & { id: string }) {
    await PollOptionRepository.ormRepo.update(pollOption.id, pollOption);
    return await PollOptionRepository.ormRepo.findBy({ id: pollOption.id });
  }

  async delete(pollOptionId: string) {
    const pollOption = await PollOptionRepository.ormRepo.findBy({ id: pollOptionId });
    await PollOptionRepository.ormRepo.delete(pollOptionId);
    return pollOption;
  }
}
