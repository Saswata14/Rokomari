import express from "express";
import {employeeRegister, employerRegister, employeeLogin} from "../controllers/authController.js"

const router = express.Router();

router.post('/registerEmployee',employeeRegister);
router.post('/registerEmployer',employerRegister);
router.post('/loginEmployee',employeeLogin);

export default router;