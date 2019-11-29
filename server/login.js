var express = require("express")
var router = express.Router()
var connection = require('./mysqlconn');



router.post('/login', function (request, response, next) {
    if (request.body.Id && request.body.password) {
		connection.query("select username	from account where userID=? and password=?;", [request.body.Id, request.body.password], (err, result) => {
			if(err) response.status(403).jsonp("Server error")
			else if (result && result.length > 0)
				response.jsonp(result[0])
			else 
				response.jsonp("NO Account exists")
		})
        
    } else {
        response.status(403).jsonp("Bad request")
    }
})

module.exports = router