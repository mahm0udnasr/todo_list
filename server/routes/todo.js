import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const router = express.Router();

router.get("/", getTodos);
router.post("/create", createTodo);
router.patch("/update", updateTodo);
router.delete("/delete", deleteTodo);


export default router;