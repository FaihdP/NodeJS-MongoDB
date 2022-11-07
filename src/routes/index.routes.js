import { Router } from "express";

// Controllers
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDoneTask
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/task/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDoneTask);

export default router;
