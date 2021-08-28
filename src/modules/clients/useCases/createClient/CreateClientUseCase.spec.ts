import { ICreateClientDTO } from "../../repositories/IClientsRepository";
import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";

let clientRepositoryInMemory: ClientsRepositoryInMemory;

describe("Create Client", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientsRepositoryInMemory();
  });

  it("Should be able to create a new client", async () => {
    const clientInfo = {
      name: "Jonh Doe",
      birthdate: new Date(2000, 1, 1),
      gender: "Male",
      document: "12345678901",
      email: "jonh.doe@email.com",
      cellphone: "5511912345678",
    } as ICreateClientDTO;

    const createdClient = await clientRepositoryInMemory.create(clientInfo);
    expect(createdClient).toHaveProperty("id");
    expect(createdClient.document).toEqual(clientInfo.document);
  });
});
