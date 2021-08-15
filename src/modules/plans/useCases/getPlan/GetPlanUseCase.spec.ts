import { PlansRepositoryInMemory } from "../../repositories/in-memory/PlansRepositoryInMemory";

let plansRepositoryInMemory: PlansRepositoryInMemory;

describe("Get Plan", () => {
  beforeEach(() => {
    plansRepositoryInMemory = new PlansRepositoryInMemory();
  });

  it("Should be able to get a plan by its id", async () => {
    const plan = await plansRepositoryInMemory.create({
      description: "Plan test",
      price: 10.0,
    });

    const getPlan = await plansRepositoryInMemory.findById(plan.id);

    expect(plan).toEqual(getPlan);
  });
});
