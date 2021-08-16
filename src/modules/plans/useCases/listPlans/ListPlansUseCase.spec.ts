import { PlansRepositoryInMemory } from "../../repositories/in-memory/PlansRepositoryInMemory";

let plansRepositoryInMemory: PlansRepositoryInMemory;

describe("List plans", () => {
  beforeEach(() => {
    plansRepositoryInMemory = new PlansRepositoryInMemory();
  });

  it("Should be able to list plans", async () => {
    await plansRepositoryInMemory.create({
      description: "Test plan 1",
      price: 20.0,
    });

    const plans = await plansRepositoryInMemory.listAll();

    expect(plans.length).toEqual(1);
  });
});
