import { Repository, getRepository } from "typeorm";

import {
  IChangePasswordDTO,
  ICreateUserDTO,
  ITurnAdminDTO,
  IUpdateEmailDTO,
  IUsersRepository,
} from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    admin,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      admin,
      name,
      email,
      password,
    });
    await this.repository.save(user);
    return user;
  }

  async getById(id: string): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

  async listAll(): Promise<User[]> {
    return this.repository.find();
  }

  async turnAdmin({ user_id, id, admin }: ITurnAdminDTO): Promise<void> {
    const requestingUser = await this.repository.findOne(user_id);
    if (requestingUser && requestingUser.admin) {
      this.repository
        .createQueryBuilder()
        .update()
        .set({ admin })
        .where("id = :id")
        .setParameters({ id })
        .execute();
    }
  }

  async checkAdmin(user_id: string): Promise<boolean> {
    const user = await this.repository.findOne(user_id);
    if (!user) {
      return false;
    }
    return user.admin;
  }

  async updateEmail({ id, email }: IUpdateEmailDTO): Promise<void> {
    this.repository
      .createQueryBuilder()
      .update()
      .set({ email })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }

  async changePassword({ id, password }: IChangePasswordDTO): Promise<void> {
    this.repository
      .createQueryBuilder()
      .update()
      .set({ password })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }
}

export { UsersRepository };
