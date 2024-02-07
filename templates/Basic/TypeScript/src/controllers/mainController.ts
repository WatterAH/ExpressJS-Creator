import { Request, Response } from "express";
import { join } from "path";

const viewsPath = join(__dirname, "..", "..", "views");

export const mainController = {
  index: (_req: Request, res: Response) => {
    res.sendFile(join(viewsPath, "index.html"));
  },
};

export default mainController;
