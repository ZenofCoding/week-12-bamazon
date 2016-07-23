var inquirer = require('inquirer');
var mysql = require ('mysql');
var keys = require('./key');
var connection = mysql.createConnection({
  host: "localhost",
  port:  3306,
  user: keys.user,
  password: keys.password,
  database: "bamazon"

});

connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
})
// First Display All of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale
connection.query('SELECT * FROM Products',function(err,res){
  if(err) throw err;

  for(var i=0; i < res.length; i++){
    console.log("_______________________ \n");
    console.log("Item ID: " + res[i].ItemID + " | Product: " + res[i].ProductName + " | Price: $" + res[i].Price)
    }

// Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.      
  var inquirer = require('inquirer');

    inquirer.prompt([

       {
         type: "input",
         name: "itemNumber",
         message: "What would you like to purchase?",
         default: "ID #"
       },
       {
         type: "input",
         name: "amountToPurchase",
         message: "How many would you like?",
         default: "Qty."
       },

    ]).then(function(answers){


// Once the customer has placed the order: Your application should...
// Check if your store has enough quantity of the product to meet the customer's request. 
    if (answer.itemNumber == res[i].ItemID && answer.amountToPurchase <= res[i].StockQuantity){
      // If your store DOES have enough of the product to meet the customer's request, you should fulfill their order. This means that you should show them the total cost of their puchase. Then update the SQL database to reflect the remaining quantity.
      


    }

    else{
      // If not, you should respond to the user by saying: "Insufficient quantity" and prevent the order from going through.
      console.log("Sorry, Insufficient quantity.")
    }



      });

  });//ends the connection query




