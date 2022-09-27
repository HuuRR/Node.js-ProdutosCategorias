import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductController from "../controllers/products/listProduct.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import listProductsCategoryController from "../controllers/products/listProductsCategory.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", listProductsController);
router.get("/:id", listProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.get("/category/:id", listProductsCategoryController);

export default router;
