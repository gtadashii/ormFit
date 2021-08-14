import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import "../../container";

import createConnection from "../typeorm";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
