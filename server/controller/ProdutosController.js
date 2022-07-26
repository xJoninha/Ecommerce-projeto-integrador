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

module.exports = controller;