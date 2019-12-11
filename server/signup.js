var express = require("express")
var router = express.Router()
var connection = require('./mysqlconn');

// /signup
router.post("/", (request, response) => {
    const {
        userID,
        password,
        username,       
    } = request.body;
    if (userID && password && username) {
        connection.query("insert into account (userID, password, username) values (?, ?, ?)", [userID, password, username],
        (err, results) => {            
            if(err) {
                if(err.errno === 1062){
                    response.jsonp("Duplicate userID")
                } else
                    response.status(500).send("Server error: " + err.message)
            } else if(results){
                response.jsonp("success") 
            } else {
                // bad response
                response.status(500).send("Server error")
            }
        })
    } else {
        response.status(404).send("Bad request")
    }
});

module.exports = router