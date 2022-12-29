import {Router} from "express";
import TaskController from "../controller/TaskController.js";

const router = new Router()
router.post("/users", TaskController.createList)
router.get("/users", TaskController.getUsersList)
router.post("/tasks", TaskController.create)
router.get("/tasks", TaskController.getAll)
router.get("/tasks/:id", TaskController.getTask)
router.put("/tasks", TaskController.update)
router.delete("/tasks/:id", TaskController.delete)

export default router;