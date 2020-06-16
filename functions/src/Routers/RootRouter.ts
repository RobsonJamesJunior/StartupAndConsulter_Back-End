import { Router } from 'express';
import { consulterRouter } from "./ConsulterRouter";

export const rootRouter = Router();

rootRouter.use("/consulters", consulterRouter);