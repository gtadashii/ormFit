import { PaymentTypesRepositoryInMemory } from "../../repositories/in-memory/PaymentTypesRepositoryInMemory";

let paymentTypesRepositoryInMemory: PaymentTypesRepositoryInMemory;

describe("Create Payment Type", () => {
  beforeEach(() => {
    paymentTypesRepositoryInMemory = new PaymentTypesRepositoryInMemory();
  });
  it("Should be able to create a new payment type", async () => {
    const paymentType = "New payment type";
    const createdPaymentType = await paymentTypesRepositoryInMemory.create(
      paymentType
    );
    expect(createdPaymentType.description).toEqual("New payment type");
  });
});
