import express from "express";
import generateHundredProducts from "../controllers/faker.controller.js";

const FakerRouter = express.Router();

//GETALL
FakerRouter.get("/", (req, res) => {
    res.status(200).send({ message: "Success", payload: generateHundredProducts() });
});

export default FakerRouter;