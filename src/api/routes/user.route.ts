import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { register } from "../controllers/user.controller";
import { catchAsync } from "../../shared/utils/catchAsync";

const userRoute = Router();

userRoute.post("/login", login);
userRoute.post("/register", catchAsync(register));

export default userRoute;
