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
//Esse redireciona para a página do produto específico
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
//********************* */
//2º Retorna a busca feita para a página pagina-retorno-buscas
controller.busca = async (req, res) => {

    //6º colocar o name do formulario da página ejs de busca de parâmetro na url
    let {key} = req.query;

    let produtoPesquisado = await Product.findAll({

        //7º dentro do where vai a condição com operadores sequelize like; tem que importar lá no começo da página
        where: {

            nome: {
                [Op.like]: `%${key}%`
            }

        }


    })
    

    res.render('pagina-retorno-buscas', {produtoPesquisado});


}
controller.vitrine = async (req, res) => {
    let {id} = req.params
    let produto = await Product.findAll({where: {tipo: id}})
    res.render("vitrine", {
        produto,
        tipo: id,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })
}
controller.adega = (req, res) => {
    res.render('adega', {
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })
}
controller.allProductsAdmin = async (req, res) => {
    const products = await Product.findAll();
    res.render('productsAdmin', {
        produtos: products,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    })
}

module.exports = controller;