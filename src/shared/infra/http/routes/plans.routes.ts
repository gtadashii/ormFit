import { GetPlanController } from "@modules/plans/useCases/getPlan/GetPlanController";
import { ListPlansController } from "@modules/plans/useCases/listPlans/ListPlansController";
import { UpdatePlanPriceController } from "@modules/plans/useCases/updatePlanPrice/UpdatePlanPriceController";
import { Router } from "express";

import { CreatePlanController } from "../../../../modules/plans/useCases/createPlan/CreatePlanController";

const plansRoutes = Router();

const createPlanController = new CreatePlanController();
const getPlanController = new GetPlanController();
const listPlansController = new ListPlansController();
const updatePlanPriceController = new UpdatePlanPriceController();

plansRoutes.post("/", createPlanController.handle);
plansRoutes.get("/", listPlansController.handle);
plansRoutes.get("/:id", getPlanController.handle);
plansRoutes.patch("/:id", updatePlanPriceController.handle);

export { plansRoutes };
