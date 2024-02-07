import { Router } from "express";
import mainController from "../controllers/mainController";

const router = Router();

router.get("/", mainController.index);

export { router };
