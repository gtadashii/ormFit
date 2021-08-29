import { User } from "../infra/typeorm/entities/User";

interface ICreateUserDTO {
  admin: boolean;
  name: string;
  email: string;
  password: string;
}

interface ITurnAdminDTO {
  user_id: string;
  id: string;
  admin: boolean;
}

interface IUpdateEmailDTO {
  id: string;
  email: string;
}

interface IChangePasswordDTO {
  id: string;
  password: string;
}

interface IUsersRepository {
  create({ admin, name, email, password }: ICreateUserDTO): Promise<User>;
  getById(id: string): Promise<User | undefined>;
  listAll(): Promise<User[]>;
  turnAdmin({ user_id, id, admin }: ITurnAdminDTO): Promise<void>;
  checkAdmin(user_id: string): Promise<boolean>;
  updateEmail({ id, email }: IUpdateEmailDTO): Promise<void>;
  changePassword({ id, password }: IChangePasswordDTO): Promise<void>;
}

export {
  IUsersRepository,
  ICreateUserDTO,
  ITurnAdminDTO,
  IUpdateEmailDTO,
  IChangePasswordDTO,
};
