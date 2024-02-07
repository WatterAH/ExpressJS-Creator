import { Router } from "express";

export const viewsRendererRouter = Router();

viewsRendererRouter.get("/", (_req, res) => {
  const data = {
    title: "Express App",
    text: "This is a simple Express.js + EJS template",
  };
  res.render("index", data);
});

export default viewsRendererRouter;
