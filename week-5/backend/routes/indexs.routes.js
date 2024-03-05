const express = require("express");

const {
  todoDisplay,
  todoNewEntry,
  updateTodo,
  deleteTodo,
} = require("../Controller/todo.Controller");

const { signUp, signIn } = require("../Controller/auth.Controller");

const authMiddleware = require("../Middleware/authoMiddleware");

const router = express.Router();

router.get("/todos", authMiddleware, todoDisplay);

router.post("/newtodo", authMiddleware, todoNewEntry);

router.put("/updateTodo", authMiddleware, updateTodo);

router.delete("/deleteTodo", authMiddleware, deleteTodo);

//auth routes
router.post("/signup", signUp);

router.post("/signin", signIn);

module.exports = router;
