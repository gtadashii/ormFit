import { ICreatePlanDTO } from "@modules/plans/repositories/IPlansRepository";

import { PlansRepositoryInMemory } from "../../repositories/in-memory/PlansRepositoryInMemory";
import { CreatePlanUseCase } from "./CreatePlanUseCase";

let plansRepositoryInMemory: PlansRepositoryInMemory;
let createPlanUseCase: CreatePlanUseCase;

describe("Create plan", () => {
  beforeEach(() => {
    plansRepositoryInMemory = new PlansRepositoryInMemory();
    createPlanUseCase = new CreatePlanUseCase(plansRepositoryInMemory);
  });

  it("Should be able to create a new plan", async () => {
    const planDescription = "Test Plan";
    const planPrice = 10.0;

    const plan = {
      description: planDescription,
      price: planPrice,
    } as ICreatePlanDTO;

    await createPlanUseCase.execute(plan);

    const createdPlan = await plansRepositoryInMemory.findByDescription(
      planDescription
    );

    expect(createdPlan).toHaveProperty("id");
  });
});
