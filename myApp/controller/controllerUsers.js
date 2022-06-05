const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const helper = {};

helper.read = fileName => fs.readFileSync(path.join(__dirname, `../data/${fileName}`), 'utf-8');

helper.write = (fileName, data) =>
  fs.writeFileSync(
    path.join(__dirname, `../data/${fileName}`),
    JSON.stringify(data, null, 2),
    "utf-8"
  );

const getUsers = () => JSON.parse(helper.read('users.json'));

const setUsers = (users) => helper.write('users.json', users);


// Controllers
const controller = {};

    controller.index = (req, res) => {res.render('cadastro')};

    controller.register =  (req, res) => {
        const errors = validationResult(req);
        const usersList =  getUsers();

        if(!errors.isEmpty()) {
            console.log(errors.mapped())
        res.render('cadastro', {errors: errors.mapped()});
        } else {

        const { email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, password, terms } = req.body;

        const id = usersList.length +1;

        const newUser = { id, email, cpf, name, last_name, birthday, age, telephone, destinatario, cep, logradouro, cidade_bairro, number, password, terms };

        usersList.push(newUser);
        setUsers(usersList);
        res.redirect('/cadastro');

    } 
    }

    controller.listaExcluir = (req, res) => {
      res.render('excluir', {
        title: `Usuários`,
        users: getUsers(), 
    })
    }

    controller.excluir = (req, res) => {

    }


module.exports = controller;