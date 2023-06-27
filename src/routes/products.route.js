import express from "express";
import * as Products from "../controllers/products.controller.js";
import errorHandler from "../services/errors/middlewares/errorMiddleware.js"

const ProductRouter = express.Router();

//GETALL
ProductRouter.get("/", Products.getAllProducts);

//GETBYID
ProductRouter.get("/:pid", Products.getProductByID);

//CREATE
ProductRouter.post("/", Products.createProduct);

//UPDATE
ProductRouter.put("/:pid", Products.updateProduct);

//DELETE
ProductRouter.delete("/:pid", Products.deleteProduct);

ProductRouter.use(errorHandler);

export default ProductRouter;