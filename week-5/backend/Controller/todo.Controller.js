const todoModel = require("../models/todo.model");

const zod = require("zod");

async function todoDisplay(req, res) {
  try {
    const userId = req.userId;
    const allTodos = await todoModel.find({ userId: userId });

    if (!allTodos) {
      res.status(403).json({
        msg: "somthing went worng",
      });
    }
    res.status(200).json({
      todos: allTodos,
    });
  } catch (err) {
    res.status(404).json({
      message: "sever crashed",
    });
    console.log(err);
  }
}

const todoEetryValuder = zod.object({
  title: zod.string(),
  description: zod.string(),
});

async function todoNewEntry(req, res) {
  console.log(req.body);

  const title = req.body.title;
  const description = req.body.description;
  const completed = req.body.completed;
  const userId = req.userId;

  if (!title && !description && !completed) {
    res.status(401).json({
      massege: "places enter data",
    });
    return;
  }

  const validator = todoEetryValuder.safeParse({
    title: title,
    description: description,
  });

  if (!validator.success) {
    res.status(404).json({
      message: "enter the corret data",
      value: validator,
    });
    return;
  }

  try {
    const newEnter = await todoModel.create({
      title: title,
      description: description,
      completed: completed,
      userId: userId,
    });

    if (!newEnter) {
      res.status(404).json({
        msg: " db not working",
      });
    }
    res.status(202).json({
      todoCreate: "new to is created ",
      todo: newEnter,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateTodo(req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const description = req.body.description;
  //   const completed = req.body.completed

  const validator = todoEetryValuder.safeParse({
    title: title,
    description: description,
  });

  if (!validator.success) {
    res.status(404).json({
      message: "enter the corret data",
      value: validator,
    });
    return;
  }

  const updateTodo = await todoModel.updateOne(
    { userId: userId, title: title },
    req.body
  );

  if (!updateTodo) {
    res.status(404).json({
      msg: " db not working",
    });
  }

  res.status(202).json({
    status: "todo is update",
    updateTodo: updateTodo,
  });
}

async function deleteTodo(req, res) {
  const title = req.body.title;
  const userId = req.userId;

  if (!title) {
    res.status(200).json({
      msg: "must provide title",
    });
    return;
  }

  try {
    const deleteTodo = await todoModel.deleteOne({
      userId: userId,
      title: title,
    });

    if (!deleteTodo) {
      res.status(404).json({
        msg: "db is not working",
      });
    }

    res.status(202).json({
      massege: "todo is delete",
      deleteTodo: deleteTodo,
    });
  } catch (error) {
    if (error) throw error;
  }
}

module.exports = {
  todoDisplay,
  todoNewEntry,
  updateTodo,
  deleteTodo,
};
