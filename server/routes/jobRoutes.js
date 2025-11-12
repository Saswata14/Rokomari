import express from "express";
import {createJob} from "../controllers/jobController.js"
import {userAuth} from "../middleware/userAuth.js"

const router = express.Router();
router.post('/userAuth',userAuth);
router.post('/createJob',userAuth,createJob);


export default router;