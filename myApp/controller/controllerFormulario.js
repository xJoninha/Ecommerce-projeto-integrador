const { validationResult } = require('express-validator');

const controller = {
    index: function(req, res) {
        res.render('cadastro')
    },
    register: function(req, res, next) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log(validationResult)
            return res.render('cadastro', {errors: errors.mapped()});
        } else {
            console.log(errors)
            return res.render('cadastro');
        }

    }
}

module.exports = controller;