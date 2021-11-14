const express = require('express');
const alasql = require('alasql');
const app = express();

alasql("CREATE TABLE Curso (id INT, descripcion STRING, nota INT)");
alasql("INSERT INTO Curso VALUES (1,'Desarrollo Web',18)");
alasql("INSERT INTO Curso VALUES (2,'Desarrollo Móvil',16)");
alasql("INSERT INTO Curso VALUES (3,'Base de datos',14)");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/",(req,res)=>{

  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify(alasql("SELECT * FROM Curso WHERE nota>10")));

});

app.listen(8080, () => {
  console.log('server started');
});

