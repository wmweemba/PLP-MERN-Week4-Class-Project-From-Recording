const Task = require('../models/Task');

// POST /api/tasks - Create a new task
exports.createTask = async (req, res) => {
    const task = await Task.create({ ...req.body, owner: req.user.id });
    res.json(task);
};

// GET /api/tasks/me - Get all tasks for the authenticated user
exports.getMyTasks = async (req, res) => {
    const tasks = await Task.find({ owner: req.user._id });
    res.json(tasks);
}