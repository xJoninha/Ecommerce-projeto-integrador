const IndexController = {
    home: (req, res) => res.render('home'),
    vitrineTinto: (req, res) => res.render('vitrine-tinto'),
    vitrineBranco: (req, res) => res.render('vitrine-branco'),
    vitrineRose: (req, res) => res.render('vitrine-rose'),
    vitrineEspumante: (req, res) => res.render('vitrine-espumante'),
    paginaProduto: (req, res) => res.render('produto'),
    adega: (req, res) => res.render('adega')
}



module.exports = IndexController;