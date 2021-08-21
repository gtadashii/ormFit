import { PaymentTypesRepositoryInMemory } from "../../repositories/in-memory/PaymentTypesRepositoryInMemory";

let paymentTypesRepositoryInMemory: PaymentTypesRepositoryInMemory;

describe("Delete payment type", () => {
  beforeEach(() => {
    paymentTypesRepositoryInMemory = new PaymentTypesRepositoryInMemory();
  });
  it("Shold be able to delete a payment type", async () => {
    const createdPaymentType = await paymentTypesRepositoryInMemory.create(
      "Payment Type A"
    );

    if (createdPaymentType) {
      await paymentTypesRepositoryInMemory.delete(createdPaymentType.id);
    }

    const paymentTypes = await paymentTypesRepositoryInMemory.list();
    expect(paymentTypes.length).toEqual(0);
  });
});
