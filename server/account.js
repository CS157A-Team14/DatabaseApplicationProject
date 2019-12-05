var express = require("express")
var router = express.Router()
var connection = require('./mysqlconn');

//account
router.get('/', (request ,response) => {
    connection.query("select * from account", (err, results) => {
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

   // Add new account
   // /account/add
   router.post("/signup", (request, response) => {
    const {
        userID,
        password,
    } = request.body;
    if (userID && password) {
        connection.query("insert into account (userID, password) values (?, ?, ?)", [userID, password, userID],
        (err, results) => {                
            if(err) {
                // do something
                response.status(500).send("Server error: " + err.message)
            } 
            else {
                // bad response
                response.status(500).send("Server error")
            }
        })
    } else {
        response.status(404).send("Bad request")
    }
});
module.exports = router
