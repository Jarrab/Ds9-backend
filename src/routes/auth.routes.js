import { Router } from "express";
import { userController } from "../controllers/auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/register", userController.register);
authRoutes.post("/login", userController.login);
