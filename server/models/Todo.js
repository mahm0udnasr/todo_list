import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("todos", TodoSchema);

export default TodoModel;
