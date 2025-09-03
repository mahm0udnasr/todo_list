import express from "express";
import { config } from "dotenv";
import router from "./routes/todo.js";
import { connectDB } from "./config/connectDB.js";
config();

const app = express();
const PORT = process.env.PORT;
connectDB();
// middlewares
app.use(express.json());

// routes
app.use("/todo", router);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});
// route for not found routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found" });
});
// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`server run on: http://localhost:${PORT}`);
});
