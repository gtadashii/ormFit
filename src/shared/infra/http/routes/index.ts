import { Router } from "express";

import { clientsRoutes } from "./client.routes";
import { paymentsRoutes } from "./payment.routes";
import { plansRoutes } from "./plans.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/plans", plansRoutes);
router.use("/payments", paymentsRoutes);
router.use("/clients", clientsRoutes);
router.use("/users", usersRoutes);

export { router };
