const express = require('express');
const { createTask, getMyTasks, getAllTasks } = require('../controllers/taskController');
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

router.post("/", protect, createTask);
router.post("/me", protect, getMyTasks);
router.post("/all", protect, authorize(["admin"]), getAllTasks);

module.exports = router;