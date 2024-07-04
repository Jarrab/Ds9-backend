import { Router } from "express";
import { userController } from "../controllers/auth.controller.js";
import { authToken } from "../middleware/validateTk.middleware.js";

export const authRoutes = Router();

authRoutes.post("/register", userController.register);
authRoutes.post("/login", userController.login);
authRoutes.post("/logout", userController.logout);
authRoutes.get("/profile",authToken, userController.getUser);
authRoutes.post("/update",authToken, userController.updateUser);
