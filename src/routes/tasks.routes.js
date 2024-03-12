import { Router } from "express";
import {getTask, createTask, updatetask, deleteTask, getTaskById} from '../controllers/tasks.controller.js';

const router = Router();

router.get('/task/index', getTask);

router.get('/task/:id', getTaskById);

router.post('/task', createTask);

router.put('/task/:id', updatetask);

router.delete('/task/:id', deleteTask);

export default router;