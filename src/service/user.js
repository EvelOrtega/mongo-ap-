const bcrypt = require("bcryptjs");
const userSchema = require("../model/user");

exports.insert = async function (reference) {
  const salt = bcrypt.genSaltSync();
  const password = bcrypt.hashSync(reference.senha, salt);

  const user = new userSchema({
    nome: reference.nome,
    sobrenome: reference.sobrenome,
    genero: reference.genero,
    cpf: reference.cpf,
    dataNascimento: reference.dataNascimento,
    email: reference.email,
    senha: password,
    salt: salt,
    rua: reference.rua,
    numero: reference.numero,
    complemento: reference.complemento,
    cep: reference.cep,
    cidade: reference.cidade,
    estado: reference.estado,
    pais: reference.pais,
    telefone: reference.telefone,
    status: reference.status,
    typeUser: reference.typeUser,
    courses: reference.courses,
  });
  console.log(user);
  return await user.save();
};

exports.login = async function (email, senha) {
  const user = await userSchema.findOne({ email: email });

  if (user) {
    const checkPassword = bcrypt.hashSync(senha, user.salt);
    if (checkPassword == user.senha) {
      return "Entrou!";
    }
  }

  throw new Error("Usuário ou senha inválidos");
};
