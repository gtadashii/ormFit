import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;

describe("List Clients", () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
  });
  it("Should be able to list all clients", async () => {
    await clientsRepositoryInMemory.create({
      name: "John Doe",
      birthdate: new Date(2000, 10, 10),
      gender: "male",
      document: "12345678901",
      email: "johndoe@email.com",
      cellphone: "555412345678",
    });

    await clientsRepositoryInMemory.create({
      name: "Jane Doe",
      birthdate: new Date(2000, 10, 10),
      gender: "male",
      document: "12345678901",
      email: "janedoe@email.com",
      cellphone: "555412345679",
    });

    const clients = await clientsRepositoryInMemory.listAll();
    expect(clients.length).toEqual(2);
  });
});
