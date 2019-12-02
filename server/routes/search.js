const express = require('express');
const router = express.Router();
const server = require('../app.js')

q = ''

router.get('/', function(req, res){
    res.redirect('/')
})

router.get('/find', function(req, res){
    res.render('client/src/NavBar.js', {q: "", rows: ''})
})

router.post('/find*', function (req, res){
    order_by = 'results.pName'
    if(req.url !== "/find"){
        order_by = req.url.replace('/find/', '')
    }
    if(req.body.q != undefined){
        q = req.body.q
    }
    sql = `SELECT results.* FROM product WHERE pName LIKE '%${q}%') ORDER BY ${order_by} DESC`
    rows = ''
    server.database.query(sql, function(err, results){
        if(results != undefined && 0 != results.length){
            for (i = 0; i < results.length; i++){
                
            }
        }
        res.render('client/src/NavBar.js', {q: q, rows: rows})
    })
});

module.exports = router