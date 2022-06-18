const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const userModel = require('../models/Users');




// Controllers
const controller = {};

    controller.index = (req, res) => {res.render('users', {title: `Usuários`, usersList: userModel.getUsers() })};

    controller.form = (req, res) => res.render('cadastro');

    controller.register =  (req, res) => {
        const errors = validationResult(req);
        const usersList =  userModel.getUsers();

        if(!errors.isEmpty()) {
            console.log(errors.mapped())
        res.render('cadastro', {errors: errors.mapped()});
        } else {

        let hash = bcrypt.hashSync(req.body.password, 10);

        const { email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, terms } = req.body;

        const id = usersList.length +1;


        const newUser = { id, email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, hash, terms };

        usersList.push(newUser);
        userModel.setUsers(usersList);
        res.redirect('/cadastro');

    } 
    }

    controller.showUser = (req, res) => {
      let id = req.params.id;
      let findUser = userModel.getUsers().find(user => user.id == id);
      res.render('user', {
        title: `Usuário`,
        user: findUser, 
      })
    }

    controller.editForm = (req, res) => {
      let id = req.params.id;
      let findUser = userModel.getUsers().find(user => user.id == id);
      res.render('editar', {
        title: `Usuários`,
        user: findUser, 
    })
    }

    controller.edit = (req, res) => {
      
    }


module.exports = controller;