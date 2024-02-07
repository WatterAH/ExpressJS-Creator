import express from "express";
import viewsRenderer from "../routes/viewsRenderer";

const app = express();

app.use(viewsRenderer);

export { app as imports };
