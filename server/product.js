var express = require("express")
var router = express.Router()
var connection = require('./mysqlconn');

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
        
    // FOR ADMIN
    // @router  POST api/products/add
    // @desc    Add new item to products list
    // @access private
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
    // @router  POST api/products/update
    // @desc    Update an item
    // @access private
    router.put("/update/:id", (request, response) => {
        var {
            pName,
            quantity,
            price,
            type
        } = request.body
        if (request.params.id && pName && quantity && price && type) {
            connection.query("update product set pName=?, quantity=?, price=?, type=? where pId=?", 
            [pName, quantity, price, type, request.params.id],
            (err, results) => {
                if(err) {
                    // do something
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
    
    // @router DELETE "/delete/:product_id"
    // @desc Delete a product with the product_id
    // @access private
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
    

  module.exports = router