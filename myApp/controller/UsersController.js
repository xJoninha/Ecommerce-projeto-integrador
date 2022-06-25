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
        let errors = validationResult(req); 
        let usersList =  userModel.getUsers();

        if(!errors.isEmpty()) {
        res.render('cadastro', {errors: errors.mapped(), old: req.body});
        } else {

        let password = bcrypt.hashSync(req.body.password, 10);

        let { email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, complemento, terms } = req.body;

        let id = usersList.length +1;


        let newUser = { id, email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, complemento, password, terms };

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
        let errors = validationResult(req);
        let id = req.params.id;
        let usersList = userModel.getUsers();
        if(!errors.isEmpty()) {
            console.log(errors.mapped())
        res.render('editar', {errors: errors.mapped()});
        } else {

        res.render('editar', { user: usersList[id] });

    } 
    }


module.exports = controller;