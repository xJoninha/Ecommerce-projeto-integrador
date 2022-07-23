// const { validationResult } = require('express-validator');
// const fs = require('fs');
// const path = require('path');
// const bcrypt = require('bcrypt');
// const userModel = require('../models/Users');

const Sequelize = require('sequelize');
const config = require("../config/database")
const db = new Sequelize(config)


const controller = {};
controller.register = (req, res) => {
  res.render('cadastro', {
      titulo: 'Formulário de Registro'
  })
};
controller.add = async (req, res) => {   
  const { nome, sobrenome, nascimento, email, senha, cpf, telefone } = req.body

  // 'telefoneFormatado' usado para evitar o registro de letras no campo 'telefone'
  // neste caso não tem 'necessidade' pois o input esta como number
  const telefoneFormatado = telefone.replace(/\D/g, '')

  const usuario = await db.query(`INSERT INTO usuarios (nome, sobrenome, nascimento, email, senha, cpf, telefone)
  VALUES (:nome, :sobrenome, :nascimento, :email, :senha, :cpf, :telefoneFormatado)`, {
      replacements: {
          nome,
          sobrenome,
          nascimento,
          email,
          senha,
          cpf,
          telefoneFormatado
        },
        type: Sequelize.QueryTypes.INSERT
  })
  if (usuario) {
      res.redirect('../../')
  } else {
      res.json({status:500, msg: "Deu merda!"})
  }
};
controller.login = async (req, res) => {
  const usuario = await db.query('SELECT * FROM usuarios')
  res.render('login', {
    titulo: 'Login',
    subtitulo: 'Preencha os campos para acessar seu perfil!',
    usuario,
    usuarioLogado: req.cookies.usuario,
    usuarioAdmin: req.cookies.admin
  })
}
controller.autentication = (req, res) => {
  res.redirect('../')
}
controller.logout = (req, res) => {
  res.clearCookie('usuario').clearCookie('admin').redirect('../../')
}
controller.allUsers = async (req, res) => {
  const usuarios = await db.query('SELECT * FROM usuarios', {
    type: Sequelize.QueryTypes.SELECT
  })
  res.render('usuarios', {
    titulo: 'Usuários',
    subtitulo: 'Listagem de Usuários',
    usuarios,
  })
};
controller.userDetail = async (req, res, next) => {
  const { id } = req.params;
  const usuario = await db.query(`SELECT * FROM usuarios WHERE usuarios.id = ${id}`, {
    type: Sequelize.QueryTypes.SELECT
  })
  
  // 2° forma diferenta de pegar infos do BD
  const usuario2 = await db.query(`SELECT * FROM usuarios WHERE usuarios.id = ?`, {
    replacements: [
      id
    ],
    type: Sequelize.QueryTypes.SELECT
  })
  
  // 3° forma diferente de pegar infos do BD
  const usuario3 = await db.query(`SELECT * FROM usuarios WHERE usuarios.id = :id`, {
    replacements: {
      id
    },
    type: Sequelize.QueryTypes.SELECT
  })
    
  res.render('usuario', {
    titulo: `Detalhes do usuario: ${usuario[0].nome}`,
    subtitulo: `Usuário id: ${id}`,
    usuario: usuario[0]
  })
};
controller.destroy = async (req, res) => {
  const { id } = req.params

  const usuario = await db.query(`DELETE FROM usuarios WHERE usuarios.id = ${id}`, {
    type: Sequelize.QueryTypes.DELETE
  })
  console.log(usuario)
  if(!usuario) {
    res.redirect('/usuarios')
  } else {
    res.json({ status: 500, msg: 'Prepara o extintor!'})
  }
};
controller.update = async (req, res) => {
  const { id }= req.params
  const usuario = await db.query(`SELECT * FROM usuarios WHERE usuarios.id = ${id}`, {
    type: Sequelize.QueryTypes.SELECT
  })
  res.render('usuarioUpdate', {
    titulo: 'Atualizar cadastro',
    usuario: usuario[0]
  })
};
controller.edit = async (req, res) => {
  const { id } = req.params
  let {
    nome,
    sobrenome,
    nascimento,
    email,
    senha,
    cpf,
    telefone
  } = req.body
  telefone = telefone.replace(/\D/g, '')

  const usuario = await db.query(`
  UPDATE usuarios 
  SET 
    nome = :nome,
    sobrenome = :sobrenome,
    nascimento = :nascimento,
    email = :email,
    senha = :senha,
    cpf = :cpf,
    telefone = :telefone
  WHERE usuarios.id = :id
  `, {
    replacements: {
      id,
      nome,
      sobrenome,
      nascimento,
      email,
      senha,
      cpf,
      telefone
    },
    type: Sequelize.QueryTypes.UPDATE
  })
  console.log(usuario)
  res.redirect('../../usuarios')
};

module.exports = controller;