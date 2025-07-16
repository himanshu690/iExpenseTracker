const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const transactionController = require("../controllers/TransactionCtrl");
const transactionRouter = express.Router();
//add
transactionRouter.post("/api/v1/transaction/create",isAuthenticated ,transactionController.create);
// list
transactionRouter.get("/api/v1/transaction/lists",isAuthenticated, transactionController.getFilteredTransaction);
//Profile

module.exports = transactionRouter;
