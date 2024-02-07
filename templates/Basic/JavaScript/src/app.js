import express from "express";
import bodyParser from "body-parser";
import imports from "./middlewares/imports.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolving the directory name of the current module file.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serving static files from the "public" directory.
app.use(express.static(join(__dirname, "..", "public")));

// Parsing JSON request bodies (usually comes from the "Form" tag).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Applying the 'imports' middleware containing the server routes.
app.use(imports);

export default app;
export { app };
