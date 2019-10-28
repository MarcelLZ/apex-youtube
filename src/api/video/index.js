const { Router } = require("express");
const routes = new Router();

/** Methods. */
const {
  findAll,
  findOne,
  create,
  like,
  unlike,
  addComment
} = require("./controller");

routes.get("/", findAll);
routes.get("/:id", findOne);
routes.post("/", create);
routes.put("/like/:id", like);
routes.put("/unlike/:id", unlike);
routes.post("/comment/:id", addComment);

module.exports = routes;
