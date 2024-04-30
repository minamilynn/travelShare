
var formidable = require('formidable');
var mv = require('mv');
var express = require("express");
var router = express.Router();
const path = require("path");

let savedFilename = [];


router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});
router.get("/forums",function(request,response){
	response.sendFile(__dirname + "/public/views/forums.html");
});


var infoList = [];
var accList = [];
var listNum = 0;
var index =0;
var selected=""
router.get('/read', function(req, res){
		console.log("Recieved index:"+req.query.index)

		if (infoList[req.query.index]!=null)
		{
			//console.log(infoList[req.query.index].continent)
			if (infoList[req.query.index].continent==req.query.continent)
			{
				console.log (infoList[req.query.index].continent+" read by client.")
				res.json(infoList[req.query.index]);
		    }
		    else
		    	res.json(null)
		}
		console.log("Selected continent did not match continent of index "+req.query.index)

});

router.post('/create', function(req, res){
	console.log(req.body.continent)
	if (req.body.continent == "" || req.body.name == "" || req.body.country == "" || req.body.description == "") {
		res.json(null);
	} 
	else {
				infoList[index] = {continent:req.body.continent, name:req.body.name, country:req.body.country, image:savedFilename[index], description: req.body.description};
				console.log("created: ");
				console.log(infoList[index]);
				console.log("index: " + listNum);
				index++;
				res.json(infoList[index-1]);
			
	}
});

router.post('/setButton', function(req, res){
	if (req.body.continent == "") {
		res.json(null);
	} else {
		selected = req.body.continent
		console.log ("Button selected:"+selected)
			
	}
});

router.get('/getListlength', function(req, res){
		res.json({length:infoList.length});
});

router.get('/readButton', function(req, res){
	if (selected=="") {
		res.json(null);
	} else {
		res.json({continent:selected});
		selected = ""
	}
});

router.post('/uploadSuccessPath', function(req, res){

	 	var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	        var oldpath = files.image.path;
	        var newpath = __dirname + '/public/images/' + files.image.name;

	        console.log('Received image: ' + files.image.name);

	        mv(oldpath, newpath, function (err) {
	            if (err) throw err;
	            savedFilename[index] = files.image.name;
	            res.json({ name: files.image.name });
	        });
	    });
})


module.exports = router;