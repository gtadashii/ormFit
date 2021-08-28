import { Client } from "../infra/typeorm/entities/Client";

interface ICreateClientDTO {
  name: string;
  birthdate: Date;
  gender: string;
  document: string;
  email: string;
  cellphone: string;
}

interface IUpdateClientDTO {
  id: string;
  email: string;
  cellphone: string;
}

interface IClientsRepository {
  create({
    name,
    birthdate,
    gender,
    document,
    email,
    cellphone,
  }: ICreateClientDTO): Promise<Client>;
  getById(id: string): Promise<Client | undefined>;
  getByDocument(document: string): Promise<Client | undefined>;
  listAll(): Promise<Client[]>;
  update({ id, email, cellphone }: IUpdateClientDTO): Promise<void>;
}

export { IClientsRepository, ICreateClientDTO, IUpdateClientDTO };
