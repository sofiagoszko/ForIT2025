import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`API corriendo en puerto ${PORT}`)
});