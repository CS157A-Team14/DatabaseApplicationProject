var express = require("express")
var router = express.Router()

router.get('/', (request ,response , next) => {
    connection.query('SELECT * FROM product', function(err, result){
      if(err) throw err
      response.status(200).jsonp(result)
    })
  })

  module.exports = router