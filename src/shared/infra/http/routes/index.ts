import { Router } from "express";

import { paymentsRoutes } from "./payment.routes";
import { plansRoutes } from "./plans.routes";

const router = Router();

router.use("/plans", plansRoutes);
router.use("/payments", paymentsRoutes);

export { router };
