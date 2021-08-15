import { GetPlanController } from "@modules/plans/useCases/getPlan/GetPlanController";
import { Router } from "express";

import { CreatePlanController } from "../../../../modules/plans/useCases/createPlan/CreatePlanController";

const plansRoutes = Router();

const createPlanController = new CreatePlanController();
const getPlanController = new GetPlanController();

plansRoutes.post("/", createPlanController.handle);
plansRoutes.get("/:id", getPlanController.handle);

export { plansRoutes };
