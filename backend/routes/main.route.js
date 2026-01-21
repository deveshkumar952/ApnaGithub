import express from "express";

import userRouter from "./user.route.js";
import repoRouter from "./repo.route.js";
import issueRouter from "./issue.route.js";

const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);

mainRouter.get("/", (req, res) => {
  res.send("Welcome!");
});

export default mainRouter;
