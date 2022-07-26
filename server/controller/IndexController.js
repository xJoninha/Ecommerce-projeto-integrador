const fs = require("fs");
const path = require("path");


//INTERAÇÃO COM BDADOS DE VINHOS


//CRUD - 1º LEITURA..
//***********************************************************//***********************************************************  */


//helper vai ajudar a ler o json
const helper = {};
helper.read = (fileName) =>
  fs.readFileSync(path.join(__dirname, `../bdados/${fileName}`), "utf-8");

  const controllerBebidas = {};

  const getVinhos = () => JSON.parse(helper.read("vinhos.json"));

  const getVinhosPorId = (id) =>
  getVinhos().find((vinhos) => vinhos.id == id);

  controllerBebidas.show = (req, res) =>
  res.render("produto", {
    vinhoAdega: getVinhosPorId(req.params.id)
  });



//*********************************************************** */
// Administração de páginas
//*********************************************************** */
//***********************************************************//***********************************************************  */
const IndexController = {
    home: (req, res) => res.render('home'),
    vitrineTinto: (req, res) => res.render('vitrine-tinto'),
    vitrineBranco: (req, res) => res.render('vitrine-branco'),
    vitrineRose: (req, res) => res.render('vitrine-rose'),
    vitrineEspumante: (req, res) => res.render('vitrine-espumante'),
    paginaProduto: (req, res) => res.render('produto'),
    adega: (req, res) => res.render('adega'),
    sobre: (req, res) => res.render('sobre'),
    politicaPrivacidade: (req, res) => res.render('politica-privacidade'),
    termosUso: (req, res) => res.render('termos-uso')
}



module.exports = IndexController, controllerBebidas;
