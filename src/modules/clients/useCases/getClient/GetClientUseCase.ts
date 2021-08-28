import { inject, injectable } from "tsyringe";

import { Client } from "../../infra/typeorm/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class GetClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute(id: string): Promise<Client> {
    const client = await this.clientsRepository.getById(id);

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }
}

export { GetClientUseCase };
