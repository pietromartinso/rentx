import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository
  );

  const { name, description } = request.body;

  const specification = createSpecificationsService.execute({
    name,
    description,
  });

  return response.status(200).send(specification);
});

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationsRepository.list();

  return response.status(200).json(specifications);
});

export { specificationsRoutes };
