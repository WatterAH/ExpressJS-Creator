import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { imports } from "./middlewares/middlewares.js";

const app = express();

// Resolving the directory name of the current module file.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Setting up views directory and view engine for rendering HTML templates with EJS.
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// Serving static files from the "public" directory.
app.use(express.static(join(__dirname, "..", "public")));

// Parsing JSON request bodies (usually comes from the "Form" tag).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Applying the 'imports' middleware containing the server routes.
app.use(imports);

export default app;
export { app };
