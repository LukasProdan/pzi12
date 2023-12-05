var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/podaci", function(request, response){
    return response.send({message:"OK"});
})

app.get("/test", function(request, response){
    return response.send({message:"OK"});
})
app.get("/podaci/:id", function(request, response){
    var id = request.params.id+1;
    return response.send({message: id+" OK"});
})
app.get("/korisnik", function(request, response){
    return response.send({message:"READ korisnik (svi)"});
})

app.get("/korisnik/:id", function(request, response){
    var id = request.params.id;
    return response.send({message: "READ korisnik "+id});
})

app.post("/podaci", function(request, response){
    var podaci = request.body.podatak;
    return response.send({message: podaci+" OK"});
})

app.post("/korisnik", function(request, response){
    var ime = request.body.imes;
    var prezime = request.body.prezimes;
    return response.send({message: "CREATE" +ime +" "+ prezime +" OK"});
})

app.put("/korisnik/:id", function(request, response){
    var id = request.params.id;
    var adresa = request.body.adresas;
    return response.send({message: "UPDATE" +id +"nova adresa " + adresa +" OK"});
})

app.delete("/korisnik/:id", function(request, response){
    var id = request.params.id;    
    var prezime = request.body.prezimes;
    return response.send({message: "DELETE "+id+ "OK"});
})



// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
