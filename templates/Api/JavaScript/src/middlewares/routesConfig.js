import express from "express";
import { router } from "../routes/template.router.js";

const app = express();

app.use(router);

export { app as imports };
