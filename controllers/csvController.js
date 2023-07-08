// Import CSV Parser and Multer
const csv = require('csv-parser')
const fs = require('fs')
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "files")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

var upload = multer({ 
    storage: storage,
}).single("csvFile");

// IndexPage
module.exports.index = function(req, res){
    let arr = [];
    fs.readdir('files', (err, files) => {           
        files.forEach(file => {
            arr.push(file);
        });
        return res.render('index', {
            file:arr
        });
    }) 
}

// Upload CSV
module.exports.csvUpload = function(req, res){
    if(req){
        upload(req,res,function(err) {
            if(err) {
                return res.redirect('/');
            }
            else {
                return res.redirect('/');
            }
        });
    }
}

// Show CSV Data
module.exports.showData = function(req, res){
    if(req.query){
        let results = [];

        let fileName = 'files/'+req.query.filename;        
        fs.createReadStream(fileName)
        .pipe(csv({ headers : false }))
        .on("data", data => results.push(Object.values(data)))
        .on("end", function() { 
            console.log(results)
            return res.render('csv-data', {result:results, filename:req.query.filename})
        });
    }
}