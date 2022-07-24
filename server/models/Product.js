module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: { 
            type: dataTypes.STRING
        }, 
        nome: {
            type: dataTypes.STRING
        },
        tipo: {
            type: dataTypes.STRING
        },
        preco: {
            type: dataTypes.STRING
        },
        descricao: {
            type: dataTypes.STRING
        },
        teor_alcoolico: {
            type: dataTypes.STRING
        },
        pais: {
            type: dataTypes.STRING
        },
        temperatura: {
            type: dataTypes.INTEGER
        },
        volume: {
            type: dataTypes.STRING
        },
        safra: {
            type: dataTypes.STRING
        },
        uvas: {
            type: dataTypes.STRING
        },
        potencial_de_guarda: {
            type: dataTypes.STRING
        },
        vinicola: {
            type: dataTypes.STRING
        },
        estoque: {
            type: dataTypes.INTEGER
        }
        
    };
    let config = {
        tableName: 'produtos',
        createdAt: false,
        updatedAt: false
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.hasMany(models.Item_Pedido, {
            as: 'Item_Pedido',
            foreignKey: 'product_id'
        })
    }

    return Product
}