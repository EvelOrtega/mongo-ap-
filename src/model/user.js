const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    nome: String,
    sobrenome: String,
    genero: String,
    cpf: String,
    dataNascimento: String,
    email: String,
    senha: String,
    salt: String,
    rua: String,
    numero: String,
    complemento: String,
    cep: String,
    cidade: String,
    estado: String,
    pais: String,
    telefone: String,
    status: String,
    typeUser: String,
    courses: String,
  }
  //{ collection: "users" }
);

module.exports = mongoose.model("user", bookSchema);
