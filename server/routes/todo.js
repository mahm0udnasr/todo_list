import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getTodos); // get all todos
router.post("/", createTodo); // create new todo
router.patch("/:id", updateTodo); // update todo
router.delete("/:id", deleteTodo); // delete todo


export default router;