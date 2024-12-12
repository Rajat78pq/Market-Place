import express from "express";
import RegisterController from "../../controllers/auth/register.controller";

const router = express.Router();

router.post("/register", RegisterController.register);

export default router;
