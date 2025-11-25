import express from "express";
import { login } from "../controladores/auth.controladores.js";

const router = express.Router();

router.post("/login", login);

export default router;
