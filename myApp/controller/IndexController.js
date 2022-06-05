const IndexController = {
    home: (req, res) => res.render('home'),
    vitrineTinto: (req, res) => res.render('vitrine-tinto'),
    vitrineBranco: (req, res) => res.render('vitrine-branco'),
    vitrineRose: (req, res) => res.render('vitrine-rose'),
    vitrineEspumante: (req, res) => res.render('vitrine-espumante')
}



module.exports = IndexController;