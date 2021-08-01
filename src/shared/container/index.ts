import { container } from "tsyringe";

import { PlansRepository } from "../../modules/plans/infra/typeorm/repositories/PlansRepository";
import { IPlansRepository } from "../../modules/plans/repositories/IPlansRepository";

container.registerSingleton<IPlansRepository>(
  "PlansRepository",
  PlansRepository
);
