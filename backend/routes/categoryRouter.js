const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();
//add
categoryRouter.post("/api/v1/categories/create",isAuthenticated ,categoryController.create);
// list
categoryRouter.get("/api/v1/categories/lists",isAuthenticated, categoryController.lists);
//Profile

module.exports = categoryRouter;
