import { PaymentTypesRepositoryInMemory } from "../../repositories/in-memory/PaymentTypesRepositoryInMemory";

let paymentTypesRepositoryInMemory: PaymentTypesRepositoryInMemory;

describe("Create Payment Type", () => {
  beforeEach(() => {
    paymentTypesRepositoryInMemory = new PaymentTypesRepositoryInMemory();
  });
  it("Should be able to create a new payment type", async () => {
    const description = "New payment type";
    const newPaymentType = await paymentTypesRepositoryInMemory.create(
      description
    );
    expect(newPaymentType).toHaveProperty("id");
  });
});
