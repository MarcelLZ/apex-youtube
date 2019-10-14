const { Router } = require("express");
const routes = Router();

/**
 * Available routes.
 */
const video = require("./video");

/**
 * Enabled routes.
 */
routes.use("/video", video);

module.exports = routes;
