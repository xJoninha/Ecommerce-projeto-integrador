// const fs = require("fs");
// const path = require("path");

// const helper = {};
// helper.read = (fileName) =>
//   fs.readFileSync(path.join(__dirname, `../bdados/${fileName}`), "utf-8");

//   const controllerBebidas = {};

//   const getVinhos = () => JSON.parse(helper.read("vinhos.json"));

//   const getVinhosPorId = (id) =>
//   getVinhos().find((vinhos) => vinhos.id == id);

//   controllerBebidas.show = (req, res) =>
//   res.render("produto", {
//     vinhoAdega: getVinhosPorId(req.params.id)
//   });

const db = require('../models')
const User = db.User

const controller = {
    home: async (req, res) => {
      const usuario = await User.findAll()
      res.render('home', {
        usuario,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      })
    },
    sobre: (req, res) => res.render('sobre', { usuarioLogado: req.cookies.usuario, usuarioAdmin: req.cookies.admin}),
    politicaPrivacidade: (req, res) => res.render('politica-privacidade', { usuarioLogado: req.cookies.usuario, usuarioAdmin: req.cookies.admin} ),
    termosUso: (req, res) => res.render('termos-uso', { usuarioLogado: req.cookies.usuario, usuarioAdmin: req.cookies.admin})
}

module.exports = controller;
