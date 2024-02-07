import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const viewsPath = join(__dirname, "..", "views");

export const mainController = {
  index: (_req, res) => {
    res.sendFile(join(viewsPath, "index.html"));
  },
};

export default mainController;
