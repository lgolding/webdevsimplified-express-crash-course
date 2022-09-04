const express = require("express");
const userRouter = express.Router();

const users = [{ firstName: "Larry" }, { firstName: "Terisa" }];

userRouter.get("/", (req, res) => {
  console.log(req.query.name ?? "No name supplied.");
  res.send("User List");
});

userRouter.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

userRouter.post("/", (req, res) => {
  const isValid = true;
  const firstName = req.body.firstName;
  if (isValid) {
    users.push({ firstName });
    console.log(`Created new user ${firstName}`);
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log(`Error: could not create user ${firstName}`);
    res.render("users/new", { firstName });
  }
});

userRouter
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User ${req.params.id}: ${req.user.firstName}`);
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
