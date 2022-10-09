import { CategoriesRepository } from "../../repositories/implementations/CatetoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = null;

const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCase
);

export { listCategoriesController };
