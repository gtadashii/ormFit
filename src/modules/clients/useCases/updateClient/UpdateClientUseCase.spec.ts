import { Client } from "../../infra/typeorm/entities/Client";
import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;

describe("Update client data", () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
  });
  it("Should be able to update client data", async () => {
    const client = await clientsRepositoryInMemory.create({
      name: "John Doe",
      birthdate: new Date(2000, 10, 10),
      gender: "male",
      document: "12345678901",
      email: "johndoe@email.com",
      cellphone: "555412345678",
    });
    const newClientData = {
      id: client.id,
      email: "johndoe2@email.com",
      cellphone: "5511912345678",
    };
    await clientsRepositoryInMemory.update(newClientData);
    const updatedClient = (await clientsRepositoryInMemory.getById(
      client.id
    )) as Client;
    expect(updatedClient.id).toEqual(client.id);
    expect(updatedClient.email).toEqual(newClientData.email);
    expect(updatedClient.cellphone).toEqual(newClientData.cellphone);
  });
});
