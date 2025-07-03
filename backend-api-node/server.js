const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskService = require("./taskService");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  res.json(taskService.getAllTasks());
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  try {
    const newTask = taskService.addTask(title);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedTask = taskService.updateTask(id, updates);
    res.json(updatedTask);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  try {
    taskService.deleteTask(id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
