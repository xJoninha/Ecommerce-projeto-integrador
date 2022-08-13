module.exports = (sequelize, dataTypes) => {
    
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: dataTypes.STRING
        },
        sobrenome: {
            type: dataTypes.STRING
        },
        nascimento: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING
        },
        senha: {
            type: dataTypes.STRING
        },
        userAdmin: {
            type: dataTypes.INTEGER,
            defaultValue: 2
        },
        cpf: {
            type: dataTypes.STRING(11)
        },
        telefone: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    return User;
}