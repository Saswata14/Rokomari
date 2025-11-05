import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"


const app = express();
connectDB();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req, res) => res.send("API is Working fine"));

app.use('/api/auth', authRoutes);



app.listen(port, () => console.log(`Server started on Port:${port}`));
