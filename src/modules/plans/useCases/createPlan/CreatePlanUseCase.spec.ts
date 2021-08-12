import { Plan } from "../../infra/typeorm/entities/Plan";
import { PlansRepositoryInMemory } from "../../repositories/in-memory/PlansRepositoryInMemory";

let plansRepositoryInMemory: PlansRepositoryInMemory;

describe("Create plan", () => {
  beforeEach(() => {
    plansRepositoryInMemory = new PlansRepositoryInMemory();
  });

  it("Should be able to create a new plan", async () => {
    const planDescription = "Test Plan";
    const plan = await plansRepositoryInMemory.create(planDescription);
    const createdPlan = (await plansRepositoryInMemory.findById(
      plan.id
    )) as Plan;
    expect(createdPlan).toHaveProperty("id");
    expect(createdPlan.id).toEqual(plan.id);
  });
});
