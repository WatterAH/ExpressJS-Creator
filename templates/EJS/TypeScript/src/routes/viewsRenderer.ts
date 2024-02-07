import { Router, Request, Response } from "express";

export const viewsRendererRouter = Router();

viewsRendererRouter.get("/", (_req: Request, res: Response) => {
  const data = {
    title: "Express App",
    text: "This is a simple Express.js + EJS template",
  };
  res.render("index", data);
});

export default viewsRendererRouter;
