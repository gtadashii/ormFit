import { GetPlanController } from "@modules/plans/useCases/getPlan/GetPlanController";
import { ListPlansController } from "@modules/plans/useCases/listPlans/ListPlansController";
import { Router } from "express";

import { CreatePlanController } from "../../../../modules/plans/useCases/createPlan/CreatePlanController";

const plansRoutes = Router();

const createPlanController = new CreatePlanController();
const getPlanController = new GetPlanController();
const listPlansController = new ListPlansController();

plansRoutes.post("/", createPlanController.handle);
plansRoutes.get("/", listPlansController.handle);
plansRoutes.get("/:id", getPlanController.handle);

export { plansRoutes };
