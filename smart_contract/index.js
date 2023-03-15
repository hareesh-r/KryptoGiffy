var fs = require("fs");

var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.listen(3001);
app.get("/getAllTransactions", function (req, res) {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.write(JSON.stringify(response));
	res.end();
});
app.post("/addToBlockchain", function (req, res) {
	console.log(req.body); // the posted data
	const writeToJSON = (data) => {
		const DATA_PATH = "../Txn.json";
		fs.writeFile(DATA_PATH, JSON.stringify(data), (err) => {
			if (err) return console.error(err);
		});
	};
	writeToJSON(req.body);
	res.writeHead(200, { "Content-Type": "application/json" });
	res.write(JSON.stringify(req.body));
	res.end();
});
