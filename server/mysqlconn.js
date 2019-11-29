const mysql = require('mysql')
// use to connect database to nodejs.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "project"
})

connection.connect(err => {
  if(err) console.log(err)
  else console.log("Connected to database")
})

module.exports = connection