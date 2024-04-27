// import express from "express";
// import { Express } from "express";

import { PrismaClient } from "@prisma/client";

// const app: Express = express();
const prisma = new PrismaClient();

// app.get("/", (req, res) => {});

// app.listen(3000);

async function createNewUser(
  username: string,
  email: string,
  password: string
) {
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
      email,
    },
    select: {
      username: true,
      password: true,
      email: true,
      id: true,
    },
  });
  console.log(newUser);
}

async function createTodos(
  userId: number,
  title: string,
  discrition: string,
  doen: boolean = false
) {
  const createNewTodo = await prisma.todos.create({
    data: {
      userId,
      title,
      discrition,
      doen,
    },
  });
  console.log(createNewTodo);
}
createNewUser("shashivadan2", "shashivadan24@gmail.com", "shashivadan@2022");
createTodos(1, "shashi", "djalkdkaldalfjdfk", true);
