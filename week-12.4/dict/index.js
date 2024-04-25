"use strict";
// import express from "express";
// import { Express } from "express";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// const app: Express = express();
const prisma = new client_1.PrismaClient();
// app.get("/", (req, res) => {});
// app.listen(3000);
function createNewUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
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
    });
}
function createTodos(userId_1, title_1, discrition_1) {
    return __awaiter(this, arguments, void 0, function* (userId, title, discrition, doen = false) {
        const createNewTodo = yield prisma.todos.create({
            data: {
                userId,
                title,
                discrition,
                doen,
            },
        });
        console.log(createNewTodo);
    });
}
createNewUser("shashivadan2", "shashivadan24@gmail.com", "shashivadan@2022");
createTodos(1, "shashi", "djalkdkaldalfjdfk", true);
