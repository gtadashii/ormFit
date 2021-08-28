import { Router } from "express";

import { clientsRoutes } from "./client.routes";
import { paymentsRoutes } from "./payment.routes";
import { plansRoutes } from "./plans.routes";

const router = Router();

router.use("/plans", plansRoutes);
router.use("/payments", paymentsRoutes);
router.use("/clients", clientsRoutes);

export { router };
