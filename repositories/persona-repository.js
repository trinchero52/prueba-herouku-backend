const Persona = require("../models/persona-model");

class PersonaRepository {
  async findAll() {
    return await Persona.find();
  }

  async register(personaData) {
    let nuevaPersona = Persona(personaData);

    return await nuevaPersona.save();
  }
}

module.exports = PersonaRepository;
