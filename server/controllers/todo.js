import todoModel from "../models/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    if (!todo) {
      return res.status(404).json({ message: "fill todo data first" });
    }
    const newTodo = todoModel({
      todo,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo, isCompleted } = req.body;
    if (!id || !todo) {
      return res.status(404).json({ message: "fill data first" });
    }
    const updateTodo = await todoModel.findByIdAndUpdate(id, {
      todo,
      isCompleted,
    });
    await updateTodo.save();
    res.status(200).json({ message: "task updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "id not found" });
    }
    await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
