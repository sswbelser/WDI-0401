var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dinosaurs");
require("./models/dinosaurs.js");

var Asset = require("mongoose").model("Asset");

app.get("/", function (req, res) {
	var assets = Asset.find({}).exec(function(err, assets) {
		console.log(assets);
		res.json(assets);
	});
	var asset = new Asset ({name: "Bronosauras"})
	asset.save(function(err, asset) {
		console.log(asset);
	});
});

app.listen(3000);