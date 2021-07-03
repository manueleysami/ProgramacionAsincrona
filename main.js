/*Modulos*/
const express = require("express") ;
const morgan = require("morgan") ;
const server = express() ;

/*Puerto*/

const port = 5000 ;

/*Middleware*/

server.use(express.json()) ;
server.use(morgan("dev")) ;

/*Rutas*/

const autos = require('./routes/autos') ;
server.use('/autos', autos) ;

/*Ruta Inicial*/

server.get("/", (req, res) => {
    res.send("Programación Asincrona Actividad")
})

/*Middleware error 404*/

server.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/error404.html")
});


server.listen(port, () => console.log("Server on port", port)) ;