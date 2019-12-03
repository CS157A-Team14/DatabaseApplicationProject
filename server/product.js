var express = require("express")
var router = express.Router()
var connection = require('./mysqlconn');

// /product
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

// /product/getitem/
router.get("/getitem/:id", (request, response) => {
    if(request.params.id){
        connection.query(`select * from product where pId=?`, [request.params.id], (err, results) => {
            if(err) {
                // do something
                response.status(500).send("Server error: " + err.message)
            } else if(results && results.length > 0){
                response.jsonp(results[0])
            } else {
                // bad response
                response.jsonp("Server error")
            }
        })
    } else {
        response.status(404).send("Bad link")
    }
})
        
   
    //   Add new item to products list
   // /product/add
    router.post("/add", (request, response) => {
        const {
            pName,
            quantity,
            price,
            type,
        } = request.body;
        if (pName && quantity && price && type) {
            connection.query("insert into product (pName, quantity, price, type) values (?, ?, ?, ?)", [pName, quantity, price, type],
            (err, results) => {                
                if(err) {
                    // do something
                    response.status(500).send("Server error: " + err.message)
                } else if(results && results.affectedRows > 0){
                    const pId = results.insertId
                    const now = new Date()
                    connection.query("insert into history (pId, pName, event, date) values (?, ?, ?, ?)", 
                        [pId, pName, "Created", `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`], 
                        (err, result) => {
                        if(err) {
                            // do something
                            response.status(500).send("Server error: " + err.message)
                        } else if(result){
                            response.jsonp("success")
                        } else {
                            // bad response
                            response.status(500).send("Server error")
                        }
                    })
                } else {
                    // bad response
                    response.status(500).send("Server error")
                }
            })
        } else {
            response.status(404).send("Bad request")
        }
    });
   
   //Update an item
   // /product/update/:id
    router.put("/update/:id", (request, response) => {
        var {
            pName,
            quantity,
            price,
            type,
            whatUpdate
        } = request.body
        if (request.params.id && pName && quantity && price && type) {
            connection.query("update product set pName=?, quantity=?, price=?, type=? where pId=?", 
            [pName, quantity, price, type, request.params.id],
            (err, results) => {
                if(err) {
                    // do something
                    response.status(500).send("Server error: " + err.message)
                } else if(results){
                    const now = new Date()
                    connection.query("insert into history (pId, pName, event, date) values (?, ?, ?, ?)", 
                        [request.params.id, pName, `Updated: ${whatUpdate}`, `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`], 
                        (err, result) => {
                        if(err) {
                            // do something
                            response.status(500).send("Server error: " + err.message)
                        } else if(result){
                            response.jsonp("success")
                        } else {
                            // bad response
                            response.status(500).send("Server error")
                        }
                    })
                } else {
                    // bad response
                    response.status(500).send("Server error")
                }
            })
        } else {
            response.status(404).send("Bad request")
        }
    });
    
    
    // Delete a product 
    // /product/delete/:id

    router.delete("/delete/:id", (request, response) => {
        if (request.params.id) {
            connection.query("delete from product where pId=?",
            [request.params.id],
            (err, results) => {
                if(err) {
                    // do something
                    response.status(500).send("Server error: " + err.message)
                } else if(results){
                    response.jsonp("Successfully deleted item")
                } else {
                    // bad response
                    response.status(500).send("Server error")
                }
            })
        } else {
            response.status(404).send("Bad request")
        }
    });

    // view history
    // /product/gethistory/:id
    
    router.get("/gethistory/:id", (request, response) => {
        if (request.params.id) {
            connection.query("select * from history where pId=?", 
            [request.params.id],
            (err, results) => {
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
        } else {
            response.status(404).send("Bad request")
        }
    })
    

  module.exports = router