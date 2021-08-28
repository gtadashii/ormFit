import { inject, injectable } from "tsyringe";

import {
  IClientsRepository,
  IUpdateClientDTO,
} from "../../repositories/IClientsRepository";

@injectable()
class UpdateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ id, email, cellphone }: IUpdateClientDTO): Promise<void> {
    const client = await this.clientsRepository.getById(id);
    if (!client) {
      throw new Error("Client does not exist");
    }
    await this.clientsRepository.update({ id, email, cellphone });
  }
}

export { UpdateClientUseCase };
