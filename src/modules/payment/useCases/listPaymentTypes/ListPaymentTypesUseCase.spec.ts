import { PaymentTypesRepositoryInMemory } from "../../repositories/in-memory/PaymentTypesRepositoryInMemory";

let paymentTypesRepositoryInMemory: PaymentTypesRepositoryInMemory;

describe("List payment Types", () => {
  beforeEach(() => {
    paymentTypesRepositoryInMemory = new PaymentTypesRepositoryInMemory();
  });
  it("Should be able to list all payment types", async () => {
    await paymentTypesRepositoryInMemory.create("Payment Type A");
    await paymentTypesRepositoryInMemory.create("Payment Type B");
    await paymentTypesRepositoryInMemory.create("Payment Type C");
    const paymentTypes = await paymentTypesRepositoryInMemory.list();
    expect(paymentTypes.length).toEqual(3);
  });
});
