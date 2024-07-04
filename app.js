import express from "express";
import { corsMiddleware } from "./scr/middleware/cors.js";
import { authRoutes } from "./scr/routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware());
app.use("/auth", authRoutes);

app.disable("x-powered-by");

export default app;
