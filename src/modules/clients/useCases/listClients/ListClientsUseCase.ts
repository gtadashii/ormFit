import { injectable, inject } from "tsyringe";

import { Client } from "../../infra/typeorm/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class ListClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute(): Promise<Client[]> {
    const clients = await this.clientsRepository.listAll();
    return clients;
  }
}

export { ListClientsUseCase };
