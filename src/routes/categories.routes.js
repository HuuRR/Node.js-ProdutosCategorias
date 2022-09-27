import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const router = Router();

router.post("", createCategoryController);
router.get("", listCategoriesController);
router.get("/:id", listCategoryController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
