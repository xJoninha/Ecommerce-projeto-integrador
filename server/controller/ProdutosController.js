const Sequelize = require('sequelize')
const db = require('../models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Product = db.Product;

const controller = {};

controller.allProducts = (req, res) => {
    Product.findAll()
        .then(produtos => {
            for(let produto of produtos) {
                console.log(produto)
            }
            res.render('produtos.ejs', {
                produtos,
                usuarioLogado: req.cookies.usuario,
                usuarioAdmin: req.cookies.admin
            })
        })
} 
controller.getProduct = (req, res) => {
    let params = req.params.id
    Product.findByPk(params)
        .then(product => { 
            res.render('produto', {
                product,
                params,
                usuarioLogado: req.cookies.usuario,
                usuarioAdmin: req.cookies.admin
            })
        })
}
controller.vitrineTinto = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Tinto")
    res.render('vitrine-tinto', {
        result,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })    
}
controller.vitrineBranco = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Branco")
    res.render('vitrine-branco', {
        result,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })    
}
controller.vitrineRose = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Rosé")
    res.render('vitrine-rose', {
        result,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })    
}
controller.vitrineEspumante = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Espumante")
    res.render('vitrine-espumante', {
        result,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })    
}
controller.adega = (req, res) => res.render('adega', {
    usuarioLogado: req.cookies.usuario,
    usuarioAdmin: req.cookies.admin
})

module.exports = controller;