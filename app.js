const express = require("express");
const PersonaController = require("./controllers/persona-controller");

const app = express();
const personaController = new PersonaController();

app.use("/", personaController.router);

module.exports = app;
