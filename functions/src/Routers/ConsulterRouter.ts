import { getConsulters, insertConsulter, getConsulterById, updateConsulter } from '../Controllers/ConsulterController';
import { Router } from 'express';

export const consulterRouter = Router();

consulterRouter.route("/")
                            .get(getConsulters)
                            .post(insertConsulter);

consulterRouter.route("/:id")
                            .get(getConsulterById)
                            .put(updateConsulter)
                            .delete();