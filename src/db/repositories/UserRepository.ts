import { appDataSource } from "../datasource";
import { UserEntity } from "../entities/UserEntity";

export class UserRepository {
  private static ormRepo = appDataSource.getRepository(UserEntity);
  private static repo: UserRepository | null = null;

  private constructor() {}

  static getRepository() {
    if (!this.repo) {
      this.repo = new UserRepository();
    }

    return this.repo;
  }

  async create(user: Partial<UserEntity>) {
    const savedUser = await UserRepository.ormRepo.save(user);
    return savedUser;
  }

  async delete(userId: string) {
    const user = await UserRepository.ormRepo.findBy({ id: userId });
    await UserRepository.ormRepo.delete(userId);
    return user;
  }
}
