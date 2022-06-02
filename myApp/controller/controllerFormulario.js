const { validationResult } = require('express-validator');
const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const users = require('../data/users.json');

const helper = {};


const controller = {};

    controller.index = (req, res) => {res.render('cadastro')};

    controller.register = (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log(errors.mapped())
        res.render('cadastro', {errors: errors.mapped()});
        } else {

        const user = {
            email: req.body.email,
            cpf: req.body.cpf,
            nome: req.body.name,
            sobrenome: req.body.last_name,
            nascimento: req.body.birthday,
            age: req.body.age,
            celular: req.body.telephone,
            destinatario: req.body.destinatario,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            cidade_bairro: req.body.cidade_bairro,
            numero: req.body.numero,
            senha: req.body.password,
            terms: req.body.terms

        };

        const usersObject = parse(users);

        const new_user = {
            ...user
        }

        const users_updated = {...users, user}

        console.log(user);
        let usersJSON = JSON.stringify(users_updated, null, 2);
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usersJSON, 'utf-8');
        res.render('cadastro');
        }

    } 


module.exports = controller;