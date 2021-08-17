import { PlansRepositoryInMemory } from "../../repositories/in-memory/PlansRepositoryInMemory";

let plansRepositoryInMemory: PlansRepositoryInMemory;

describe("Update plan price", () => {
  beforeEach(() => {
    plansRepositoryInMemory = new PlansRepositoryInMemory();
  });

  it("Should be able to update plan price", async () => {
    const originalPlan = await plansRepositoryInMemory.create({
      description: "Plan price test",
      price: 10.0,
    });

    const updateData = {
      id: originalPlan.id,
      price: 20.0,
    };

    await plansRepositoryInMemory.updatePrice(updateData);
    expect(updateData.price).toEqual(originalPlan.price);
  });
});
