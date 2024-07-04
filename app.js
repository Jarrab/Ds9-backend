import express from "express";
import cors from "cors";
import { authRoutes } from "./src/routes/auth.routes.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());

//app.use(corsMiddleware());
app.use("/auth", authRoutes);

app.disable("x-powered-by");

export default app;
