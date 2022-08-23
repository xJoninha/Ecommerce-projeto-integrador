// const { json } = require('sequelize');
// const Sequelize = require('sequelize');
// const config = require("../config/database")

const db = require('../models')
// const sequelize = db.sequelize
const User = db.User

const controller = {};
// OK
controller.register = (req, res) => {
  res.render('cadastro', {
      titulo: 'Formulário de Registro',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
  })
};
// OK
controller.add = async (req, res) => {   
  const { nome, sobrenome, nascimento, email, senha, cpf, telefone } = req.body;

  const userExists = await User.findOne({ where: {email} })

  if(userExists) {
    res.render("errorPage",{title:"Erro...",message:"Email já cadastrado"})
  } else {
    User.create({ nome, sobrenome, nascimento, email, senha, cpf, telefone })
    res.render("login")
  }

};
// OK - warning
controller.login = (req, res) => {
  let { email, senha } = req.body
  const usuario = User.findOne({where: email, senha})
  if(usuario) {
    res.render("login", {
        usuario,
        titulo: "Login",
        subtitulo: "Preencha os campos para acessar seu perfil!",
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      })
  } else {
    res.render('errorPage', {
      title: 'Solicitação negada!',
      message: 'Usuario não cadastrado | email e/ou senha incorretos!',
    })
  }
  
};
controller.autentication = (req, res, next) => {
  res.redirect('../../')
};
controller.logout = (req, res) => {
  res.clearCookie('usuario').clearCookie('admin').redirect('../../')
};
// OK
controller.allUsers = async (req, res) => {
  const usuarios = await User.findAll();
  res.render('usuarios', {
    titulo: 'Usuários',
    subtitulo: `Listagem de Usuários, Total: ${usuarios.length}`,
    usuarios,
    usuarioLogado: req.cookies.usuario,
    usuarioAdmin: req.cookies.admin
  })
};
// OK
controller.userDetail = async (req, res) => {
  const { id } = req.params;
  const usuario = await User.findByPk(id)
    res.render('usuario', {
      usuario,
      titulo: `Detalhes do usuario`,
      subtitulo: `Usuário id: ${id}`,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
};
// OK
controller.destroy = async (req, res) => {
  const { id } = req.params
  const usuario = await User.destroy({ where: { id } })
  if (usuario) 
    res.redirect('/admin/usuarios')
  else
    res.json({ status: 500, msg: 'Prepara o extintor!'})
};
// OK
controller.update = (req, res) => {
  const { id }= req.params
  User.findByPk(id)
    .then(usuario => {
      res.render('usuarioUpdate', {
        titulo: "Atualizar perfil",
        usuario,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      })
    })
};
// OK
controller.edit = async (req, res) => {
  const { id } = req.params
  let { nome, sobrenome, nascimento, email, senha, cpf, telefone } = req.body
  // telefone = telefone.replace(/\D/g, '')
  const usuario = await User.update(
    { nome, sobrenome, nascimento, email, senha, cpf, telefone },
    { where: { id } }
  )
  res.redirect('../../usuarios')
};

module.exports = controller;