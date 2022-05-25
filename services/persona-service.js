const faker = require("@faker-js/faker").faker;

const PersonaRepository = require("../repositories/persona-repository");

class PersonaService {
  constructor() {
    this.personaRepository = new PersonaRepository();
  }

  async getPersonas() {
    let personas = await this.personaRepository.findAll();

    return personas;
  }

  async registerPersona() {
    const persona = {
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      fechaNacimiento: faker.date.between(),
      ciudad: faker.address.city(),
      mail: faker.internet.email(),
    };

    let nuevaPersona = await this.personaRepository.register(persona);

    return nuevaPersona;
  }
}

module.exports = PersonaService;
