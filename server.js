
// =============================================================
var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// ===========================================================
var dnaModel = [
    {
        name: "ADN Modelo",
        model: ["ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG"],
    },
];

var otherModels = [
    {
        dnaName: "dna1",
        model: ["ATGAGA,CACTGC,TTATGT,AGAAGG,CCCCTA,TCACTG"]
    },
];


// Rutas
// ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/dnaModel", function(req, res) {
  res.json(dnaModel);
});

// Ruta para obtener todos los modelos guardados

app.get("/omodels", function(req, res) {
    res.json(otherModels);
});


// Ruta para testear los modelos

app.get("/api/:models?", function (req, res) {

    var chosen = req.params.models;
    console.log(chosen);
    console.log(dnaModel[0].model);

    if (chosen) {

        for (var i = 0; i < dnaModel.length; i++) {
            if (chosen === dnaModel[i].model[0]) {
                return res.json(dnaModel[i]);
            }
        }

        return res.send("Cadena de ADN diferente");
    }else {
        res.json(otherModels);
    }

});

// Rutas para agregar nuevos modelos
app.get("/add", function (req,res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.post("/api/new", function(req,res){
    var newModel = req.body;
    newModel.name=newModel.name.replace(/\s+/g, "").toLowerCase();

    console.log(newModel);

    otherModels.push(newModel);

    res.json(newModel);
})



// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});