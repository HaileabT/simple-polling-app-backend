import { appDataSource } from "../datasource";
import { VoteEntity } from "../entities/VoteEntity";

export class VoteRepository {
  private static ormRepo = appDataSource.getRepository(VoteEntity);
  // private static repo: VoteEntity | null = null;
  private static repo: VoteRepository | null = null;

  private constructor() {}

  public static getRepository() {
    if (!VoteRepository.repo) {
      // this.repo = new VoteEntity();
      VoteRepository.repo = new VoteRepository();
    }

    return VoteRepository.repo;
  }

  async create(vote: Partial<VoteEntity>) {
    const savedVote = await VoteRepository.ormRepo.save(vote);
    return savedVote;
  }

  async update(vote: Partial<VoteEntity> & { id: string }) {
    await VoteRepository.ormRepo.update(vote.id, vote);
    return await VoteRepository.ormRepo.findBy({ id: vote.id });
  }

  async delete(voteId: string) {
    const vote = await VoteRepository.ormRepo.findBy({ id: voteId });
    await VoteRepository.ormRepo.delete(voteId);
    return vote;
  }
}
