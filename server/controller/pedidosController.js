const sequelize = require('sequelize')
const db = require('../models')

const Pedido = db.Item_Pedido;
const controller = {};


controller.createPedido = async (req, res) => {

    const {produtos_id, quantidade, urlDeOrigem} = req.body;
    await Pedido.create({ produtos_id, quantidade});

    res.redirect(301, urlDeOrigem);
};


//mostra a lista na página da ADEGA depois

controller.leiaPedido = async (req, res) => {

    const pedidos = await Pedido.findAll();
    res.render('adega', {
        pedidos:
        produtos_id,
        quantidade
    })

}




module.exports = controller;