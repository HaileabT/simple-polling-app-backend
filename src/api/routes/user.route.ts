import { Router } from "express";
import { login } from "../controllers/user.controller";
import { register } from "../controllers/user.controller";
const userRoute = Router();
userRoute.post("/login", login);
userRoute.post("/register", register);

export default userRoute;
