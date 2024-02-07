import express from "express";
import cors from "cors";
import { imports } from "./middlewares/routesConfig.js";

const app = express();

// Configuring CORS options to allow requests from the provided URLs.
const corsOptions = {
  origin: ["http://localhost"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use("*", cors(corsOptions));

// Enabling the middleware to parse request bodies as JSON.
app.use(express.json());

// Applying the 'imports' middleware containing the api endpoints.
app.use(imports);

export { app };
