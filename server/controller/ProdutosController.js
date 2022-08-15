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



//Esse redireciona para a página do produto específico

controller.getProduct = (req, res) => {
    let params = req.params.id
    Product.findByPk(params)
        .then(product => { 
            res.render('produto', { product, params })
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
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Rose")
    res.render('vitrine-rose', {result})    
}
controller.vitrineEspumante = async (req, res) => {
    let produtos = await Product.findAll();
    let result = produtos.filter(produtosFiltrados => produtosFiltrados.tipo === "Espumante")
    res.render('vitrine-espumante', {result})    
}

controller.adega = (req, res) => res.render('adega');



module.exports = controller;