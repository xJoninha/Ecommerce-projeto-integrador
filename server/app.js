// essa constiável em conjunto com o código em error handler mais abaixo estão aqui para retornar erros http. PÁGINA DE ERRO
const createError = require("http-errors");
// buscando express, já conhecido
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require('express-session')

// chamando rotas
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productRouter");
const pedidosRouter = require("./routes/pedidosRouter");
const adminRouter = require("./routes/adminRouter");

// Importando arquivo de adminmiddleware
const adminMiddleware = require('./middlewares/admin')

// esse é conhecido também, chamando as funções e métodos do express.
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
// puxar vistas ejs
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


app.use(cookieParser());
app.use(session({ secret: 'QWhNdWxla2U=', cookie: { maxAge: 60000 } }))


// essa linha está definindo a pasta public como rota padrão, ou seja, qualquer chamada dentro dessa pasta não precisa
// colocar o caminho até ela.
app.use(express.static(path.join(__dirname, "public")));


// chamando rota 2 para a pagina /users
app.use("/usuario", usersRouter);
app.use("/produtos", productsRouter);
app.use("/pedidos", pedidosRouter);
// chamando rota 1, para página geral onde uma barra é necessária
app.use("/", indexRouter);


// Apenas usuarios administradores
app.use(adminMiddleware); 

app.use("/admin", adminRouter);





// catch 404 and forward to error handler 
// PÁGINA DE ERRO
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  // PÁGINA DE ERRO
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;