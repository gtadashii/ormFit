import { Router } from "express";

import { CreatePlanController } from "../../../../modules/plans/useCases/createPlan/CreatePlanController";

const plansRoutes = Router();

const createPlanController = new CreatePlanController();

plansRoutes.post("/", createPlanController.handle);

export { plansRoutes };
