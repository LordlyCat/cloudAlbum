var fs = require('fs');
var express = require('express');
var multer  = require('multer')
var path = require('path');
const bodyParser = require('body-parser');
var app = express();
var upload = multer({ dest: 'upload/' });

app.use(express.static(path.join(__dirname, '/')));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: false
// }));

app.use(bodyParser.text());
// 图片上传
// app.post('/', upload.array('logo', 100), function(req, res, next){
//     var files = req.files;
    
//     console.log(files.length);
//     console.log(files[1].originalname)

//     res.send({ret_code: '0'});
// });

app.post('/', function (req, res, nest) {
    console.log(req.body);
    res.send(200);
})

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});





app.listen(3000, function () {
    console.log('Listening on 3000');
});