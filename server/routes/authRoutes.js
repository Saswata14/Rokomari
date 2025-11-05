import express from "express";
import {login, employeeRegister, employerRegister} from "../controllers/authController.js"

const router = express.Router();

router.post('/registerEmployee',employeeRegister);
router.post('/registerEmployer',employerRegister);
router.post('/login',login);

export default router;