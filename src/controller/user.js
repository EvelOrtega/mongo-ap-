const userService = require("../service/user");
const user = require("../model/users.json")

exports.users = (req, res) => {
  res.status(200).send(user)
}

exports.post = async (req, res, next) => {
  const user = req.body;
  const response = await userService.insert(user);

  res.status(201).send(response);
};

exports.login = async (req, res, next) => {
  const credenciais = req.body;
  try {
    const response = await userService.login(
      credenciais.email,
      credenciais.senha
    );

    res.status(200).send(response);
    console.log('logado')
  } catch (error) {
    res.status(403).send(error);
    console.log(credenciais)

  }
};

exports.desativar = async (req, res) => {
  try {
    const email = req.params.email;
    const usuario = await usuario.findOne({ _email: email });
    const updateData = {
      status: req.body.status,
    };

    const usuarioAtualizado = await usuario.updateOne(
      { _email: email },
      { $set: updateData },
      { new: true }
    );
    return res.json({ usuarioAtualizado });
  } catch (err) {
    return res.status(400).json({ error: "Usuário não existe" });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const email = req.params.email;
    const usuario = await usuario.findOne({ _email: email });

    const updateData = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      genero: req.body.genero,
      cpf: req.body.cpf,
      dataNascimento: req.body.dataNascimento,
      email: req.body.email,
      senha: req.body.senha,
      rua: req.body.rua,
      numero: req.body.nome,
      complemento: req.body.complemento,
      cep: req.body.cep,
      cidade: req.body.cidade,
      estado: req.body.estado,
      pais: req.body.pais,
      telefone: req.body.telefone,
    };

    const usuarioAtualizado = await usuario.updateOne(
      { _email: email },
      { $set: updateData },
      { new: true }
    );
    return res.json({ usuarioAtualizado });
  } catch (err) {
    return res.status(400).json({ error: "Usuário não existe" });
  }
};
