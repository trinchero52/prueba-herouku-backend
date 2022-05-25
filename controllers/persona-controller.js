const express = require("express");
const PersonaService = require("../services/persona-service");

class PersonaController {
  constructor() {
    this.personaService = new PersonaService();
    this.router = express.Router();
    this.router.post("/", (req, res) => {
      return this.registerPersona(req, res);
    });
    this.router.get("/", (req, res) => {
      this.getPersonas(req, res);
    });
  }

  async registerPersona(req, res) {
    let nuevaPersonaCreada = await this.personaService.registerPersona();
    return res.json(nuevaPersonaCreada);
  }

  getPersonas(req, res) {
    let usersPromise = this.personaService.getPersonas();

    usersPromise
      .then((personas) => {
        res.status(200).json(personas);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      });
  }
}

module.exports = PersonaController;
