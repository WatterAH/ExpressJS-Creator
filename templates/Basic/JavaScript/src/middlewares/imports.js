import express from "express";
import { router } from "../routes/mainRouter.js";

const app = express();

app.use(router);

export { app as imports };
export default app;
