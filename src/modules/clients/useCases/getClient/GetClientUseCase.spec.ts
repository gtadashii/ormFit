import { Client } from "../../infra/typeorm/entities/Client";
import { ICreateClientDTO } from "../../repositories/IClientsRepository";
import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;

describe("Get Client", () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
  });
  it("Should be able to get a client by its id", async () => {
    const client = {
      name: "John Doe",
      birthdate: new Date("2000/01/01"),
      gender: "male",
      document: "12345678901",
      email: "johndoe@email.com",
      cellphone: "551112345678",
    } as ICreateClientDTO;
    const createdClient = await clientsRepositoryInMemory.create(client);
    const searchedClient = (await clientsRepositoryInMemory.getById(
      createdClient.id
    )) as Client;
    expect(searchedClient).toHaveProperty("id");
    expect(searchedClient.name).toEqual(client.name);
  });
});
