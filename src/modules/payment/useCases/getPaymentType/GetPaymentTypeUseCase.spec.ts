import { PaymentTypesRepositoryInMemory } from "../../repositories/in-memory/PaymentTypesRepositoryInMemory";

let paymentTypesRepositoryInMemory: PaymentTypesRepositoryInMemory;

describe("Get Payment Type", () => {
  beforeEach(() => {
    paymentTypesRepositoryInMemory = new PaymentTypesRepositoryInMemory();
  });

  it("Should be able to get a payment type by its id", async () => {
    const paymentType = await paymentTypesRepositoryInMemory.create(
      "Tipo de pagamento A"
    );
    const retrievedPaymentType = await paymentTypesRepositoryInMemory.getById(
      paymentType.id
    );
    expect(paymentType).toEqual(retrievedPaymentType);
  });
});
