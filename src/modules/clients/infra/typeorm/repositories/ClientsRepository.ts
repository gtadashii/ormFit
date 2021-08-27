import { Repository, getRepository } from "typeorm";

import {
  IClientsRepository,
  ICreateClientDTO,
  IUpdateClientDTO,
} from "../../../repositories/IClientsRepository";
import { Client } from "../entities/Client";

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create({
    name,
    bithdate,
    gender,
    document,
    email,
    cellphone,
  }: ICreateClientDTO): Promise<Client> {
    const client = this.repository.create({
      name,
      bithdate,
      gender,
      document,
      email,
      cellphone,
    });

    await this.repository.save(client);
    return client;
  }

  async getById(id: string): Promise<Client | undefined> {
    return this.repository.findOne({ id });
  }

  async getByDocument(document: string): Promise<Client | undefined> {
    return this.repository.findOne({ document });
  }

  async listAll(): Promise<Client[]> {
    return this.repository.find();
  }

  async update({ id, email, cellphone }: IUpdateClientDTO): Promise<void> {
    this.repository
      .createQueryBuilder()
      .update()
      .set({ email, cellphone })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }
}

export { ClientsRepository };
