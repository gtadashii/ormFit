import { User } from "../../infra/typeorm/entities/User";
import {
  IChangePasswordDTO,
  ICreateUserDTO,
  ITurnAdminDTO,
  IUpdateEmailDTO,
  IUsersRepository,
} from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  async create({
    admin,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, {
      admin,
      name,
      email,
      password,
    });
    this.users.push(user);
    return user;
  }

  async getById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async listAll(): Promise<User[]> {
    return this.users;
  }

  async turnAdmin({ user_id, id, admin }: ITurnAdminDTO): Promise<void> {
    const requestingUser = this.users.find((user) => user.id === user_id);

    if (requestingUser && requestingUser.admin) {
      const index = this.users.findIndex((user) => user.id === id);
      this.users[index].admin = admin;
    }
  }

  async checkAdmin(user_id: string): Promise<boolean> {
    const user = this.users.find((user) => user.id === user_id);
    if (!user) {
      return false;
    }
    return user.admin;
  }

  async updateEmail({ id, email }: IUpdateEmailDTO): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index].email = email;
  }

  async changePassword({ id, password }: IChangePasswordDTO): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index].password = password;
  }
}

export { UsersRepositoryInMemory };
