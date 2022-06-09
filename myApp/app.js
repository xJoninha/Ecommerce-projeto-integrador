var createError = require('http-errors');            //essa variável em conjunto com o código em error handler mais abaixo estão aqui para retornar erros http. PÁGINA DE ERRO
var express = require('express');                       //buscando express, já conhecido
var path = require('path');                     //...
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');            //chamando rota 01
var usersRouter = require('./routes/users');   
var formularioRouter = require('./routes/formulario');        //chamando rota 02

var app = express();               //esse é conhecido também, chamando as funções e métodos do express.

// view engine setup
app.set('views', path.join(__dirname, 'views'));      //puxar vistas ejs
app.set('view engine', 'ejs');


app.use(logger('dev'));                             //.....
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());                                  //.....

app.use(express.static(path.join(__dirname, 'public')));            //essa linha está definindo a pasta public como rota padrão, ou seja, qualquer chamada dentro dessa pasta não precisa 
                                                                                                          // colocar o caminho até ela.


app.use('/', indexRouter);                      //chamando rota 1, para página geral onde uma barra é necessária
app.use('/users', usersRouter); 
app.use('/cadastro', formularioRouter);                //chamando rota 2 para a pagina /users


//******************************************************************************************************** */
// catch 404 and forward to error handler
app.use(function(req, res, next) {                //PÁGINA DE ERRO
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};     //PÁGINA DE ERRO

  // render the error page
  res.status(err.status || 500);                    //PÁGINA DE ERRO
  res.render('error');
});

//******************************************************************************************************** */

module.exports = app;
