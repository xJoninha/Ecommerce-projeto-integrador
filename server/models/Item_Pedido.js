module.exports = (sequelize, dataTypes) => {
    let alias = 'Item_Pedido';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: { 
            type: dataTypes.FLOAT
        },
        valor: {
            type: dataTypes.DECIMAL
        },
        pedidos_id: {
            type: dataTypes.INTEGER
        },
        produtos_id: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'item_pedido',
        createdAt: false,
        updatedAt: false
    }
    const Item_Pedido = sequelize.define(alias, cols, config);

    Item_Pedido.associate = function(models) {
        Item_Pedido.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return Item_Pedido
}