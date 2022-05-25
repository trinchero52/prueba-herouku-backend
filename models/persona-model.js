const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonaSchema = Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    ciudad: { type: String, required: true },
    mail: { type: String, required: true },
  },
  {
    collection: "personas",
    timestamps: { createdAt: "creacion", updatedAt: "ultimaModificacion" },
  }
);

module.exports = mongoose.model("Persona", PersonaSchema);
