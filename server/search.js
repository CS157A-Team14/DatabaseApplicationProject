/*
var express = require('express');
var router = express.Router();
var mysql = require("../mysqlconn");
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
router.post('/search/process', function(req, res, next) {
    console.log(req.body);
});

router.get('/search/:keyword', function(req, res, next) {
    var keyword;
    keyword = req.params.keyword;
    console.log("+++++");
    console.log(keyword+"1234");
    mysql.select('SELECT * from product where pName like \'%'+ keyword +'%\' ;',


    function (err, data){
        if (err) throw err;

    res.render('front/search/search', { contents : data});
  });
});


module.exports = router;
*/

const express = require('express');
const router = express.Router();
const server = require('./app.js')
var connection = require('./mysqlconn.js');

router.get('/', (request ,response) => {
    connection.query("select * from product", (err, results) => {
        if(err) {
            // do something
            response.status(500).send("Server error: " + err.message)
        } else if(results){
            response.jsonp(results)
        } else {
            // bad response
            response.status(500).send("Server error")
        }
    })
  });

router.get("/searchitem/:name", (request, response) => {
    console.log("Hello");
    if(request.params.name){
        connection.query(`select * from product where pName=?`, [request.params.name], (err, results) => {
            if(err) {
                // do something
                response.status(500).send("Server error: " + err.message)
            } else if(results){
                response.jsonp(results[0])
            } else {
                // bad response
                response.status(500).send("Server error")
            }
        })
    } else {
        response.status(404).send("Bad link")
    }
})

module.exports = router