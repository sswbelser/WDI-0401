var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AssetsSchema = new Schema ({
	name: String
});

mongoose.model("Asset", AssetsSchema);