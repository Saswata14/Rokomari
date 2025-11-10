import express from "express";
import {employeeRegister, employerRegister, employeeLogin, employerLogin} from "../controllers/authController.js"

const router = express.Router();

router.post('/registerEmployee',employeeRegister);
router.post('/registerEmployer',employerRegister);
router.post('/loginEmployee',employeeLogin);
router.post('/loginEmployer',employerLogin);

export default router;