const express = require("express");
const userRouter = express.Router();

const users = [{ name: "Larry" }, { name: "Terisa" }];

userRouter.get("/", (req, res) => {
  res.send("User List");
});

userRouter.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

userRouter.post("/", (req, res) => {
  const message = `Created new user ${req.body.firstName}`;
  console.log(message);
  res.send(message);
});

userRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User ${req.params.id}: ${req.user.name}`);
  })
  .put((req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

userRouter.param("id", (req, res, next, id) => {
  console.log(`param middleware handling id ${id} for ${req.method}.`);
  // How would this work in TypeScript?
  req.user = users[id];
  next();
});

module.exports = userRouter;
