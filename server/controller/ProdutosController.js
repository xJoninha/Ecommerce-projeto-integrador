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
            res.render('produtos.ejs', { produtos })
        })
} 
controller.getProduct = (req, res) => {
    let params = req.params.id
    Product.findByPk(params)
        .then(product => { 
            res.render('produto', { product, params })
        })
}
controller.vitrineTinto = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Tinto")
    res.render('vitrine-tinto', {result})    
}
controller.vitrineBranco = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Branco")
    res.render('vitrine-branco', {result})    
}
controller.vitrineRose = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Rosé")
    res.render('vitrine-rose', {result})    
}
controller.vitrineEspumante = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Espumante")
    res.render('vitrine-espumante', {result})    
}

controller.adega = (req, res) => res.render('adega')

module.exports = controller;