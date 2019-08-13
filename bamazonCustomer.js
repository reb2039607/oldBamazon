const inquirer = require('inquirer');

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "R92aguay!",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // console.log("connected as id " + connection.threadId);
});

inquirer
  .prompt([
    
    {
      type: "input",
      message: "Please enter the ID of the product you would like to purchase:",
      name: "product"
    },
        
    {
      type: "input", 
      message: "How many would you like?",
      name: "quantity"
    }
  ])
  
  .then(function(inquirerResponse) {
    
    if (inquirerResponse.product) {
      

      console.log("\nYou have selected " + inquirerResponse.quantity + inquirerResponse.product);
     
    }
    else {
      console.log("\nSorry you didn't find what you were looking for.\n");
    }
  });