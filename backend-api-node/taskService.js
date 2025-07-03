let tasks = [];
let currentId = 1;

function getAllTasks() {
  return tasks;
}

function addTask(title) {
  if (!title || title.trim() === "") {
    throw new Error("Title is required");
  }
  const newTask = { id: currentId++, title: title.trim(), completed: false };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, updates) {
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    throw new Error("Task not found");
  }
  if (typeof updates.title === "string") {
    task.title = updates.title.trim();
  }
  if (typeof updates.completed === "boolean") {
    task.completed = updates.completed;
  }
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    throw new Error("Task not found");
  }
  tasks.splice(index, 1);
}

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
