import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import limiter from "./app/middlewares/limiter";
import { corsOptions } from "./app/utils/cors.config";

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(limiter);

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
});

export default app;
