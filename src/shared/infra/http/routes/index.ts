import { Router } from "express";

import { plansRoutes } from "./plans.routes";

const router = Router();

router.use("/plans", plansRoutes);

export { router };
