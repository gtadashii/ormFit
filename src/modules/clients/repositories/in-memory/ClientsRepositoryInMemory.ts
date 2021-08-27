import { Client } from "../../infra/typeorm/entities/Client";
import {
  IClientsRepository,
  ICreateClientDTO,
  IUpdateClientDTO,
} from "../IClientsRepository";

class ClientsRepositoryInMemory implements IClientsRepository {
  clients: Client[] = [];
  async create({
    name,
    bithdate,
    gender,
    document,
    email,
    cellphone,
  }: ICreateClientDTO): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      name,
      bithdate,
      gender,
      document,
      email,
      cellphone,
    });
    this.clients.push(client);
    return client;
  }

  async getById(id: string): Promise<Client | undefined> {
    const client = this.clients.find((client) => client.id === id);
    return client;
  }

  async getByDocument(document: string): Promise<Client | undefined> {
    const client = this.clients.find((client) => client.document === document);
    return client;
  }

  async listAll(): Promise<Client[]> {
    return this.clients;
  }

  async update({ id, email, cellphone }: IUpdateClientDTO): Promise<void> {
    const index = this.clients.findIndex((client) => client.id === id);
    this.clients[index].email = email;
    this.clients[index].cellphone = cellphone;
  }
}

export { ClientsRepositoryInMemory };
