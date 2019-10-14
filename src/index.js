const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors("*"));
app.use(morgan("*"));

/**
 * API modules.
 */
const routes = require("./api/routes");
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`));
