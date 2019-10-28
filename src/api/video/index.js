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

routes.get("/:youtubeId", findOne);
routes.get("/", findAll);
routes.post("/", create);
routes.put("/like/:id", like);
routes.put("/unlike/:id", unlike);
routes.post("/comment/:id", addComment);

module.exports = routes;
