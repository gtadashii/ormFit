import { inject, injectable } from "tsyringe";

import {
  ICreateClientDTO,
  IClientsRepository,
} from "../../repositories/IClientsRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute({
    name,
    birthdate,
    gender,
    document,
    email,
    cellphone,
  }: ICreateClientDTO): Promise<void> {
    const clientAlreadyExists = await this.clientsRepository.getByDocument(
      document
    );

    if (clientAlreadyExists) {
      throw new Error("Client already exists");
    }

    await this.clientsRepository.create({
      name,
      birthdate,
      gender,
      document,
      email,
      cellphone,
    });
  }
}

export { CreateClientUseCase };
