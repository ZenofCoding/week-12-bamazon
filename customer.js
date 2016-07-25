var mysql = require('mysql');

var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "kimchi4u", 
    database: "bamazon"
})


connection.connect(function(err) {
    if (err) throw err;
    runSearch();
})

var runSearch = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon! What would like to shop for?",
        choices: ["Cleaning", "Entertainment", "Clothing", "Food"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Cleaning':
                cleaningSearch();
            break;
            
            case 'Find all artists who appear more than once':
                entertainmentSearch();
            break;
            
            case 'Find data within a specific range':
                clothingSearch();
            break;
            
            case 'Search for a specific song':
                foodSearch();
            break;
        }
    })
};

var cleaningSearch = function() {
    inquirer.prompt({
        name: "cleaning",
        type: "input",
        message: "Which cleaning item would you like to purchase?"
    }).then(function(answer) {
        var query = 'SELECT id, ProductName, DepartmentName, Price, StockQuantity FROM Products WHERE ?'
        connection.query(query, {cleaning: answer.cleaning}, function(err, res) {
            for (var i = 0; i < answer.length; i++) {
                console.log("ID:" + res[i].id + " || ProductName: " + res[i].ProductName + " || DepartmentName:" + res[i].DepartmentName + " || Price:" + res[i].Price + " || StockQuantity:" + res[i].StockQuanity);
            }
            runSearch();
        })
    })
};

var entertainmentSearch = function() {
    inquirer.prompt({
        name: "Entertainment",
        type: "input",
        message: "Which entertainment item would you like to purchase?"
    }).then(function(answer) {
        var query = 'SELECT id, ProductName, DepartmentName, Price, StockQuantity FROM Products WHERE ?'
        connection.query(query, {entertainment: answer.entertainment}, function(err, res) {
            for (var i = 0; i < answer.length; i++) {
                console.log("ID:" + res[i].id + " || ProductName: " + res[i].ProductName + " || DepartmentName:" + res[i].DepartmentName + " || Price:" + res[i].Price + " || StockQuantity:" + res[i].StockQuanity);
            }
            runSearch();
        })
    })
};

var clothingSearch = function() {
    inquirer.prompt({
        name: "Clothing",
        type: "input",
        message: "Which clothing item would you like to purchase?"
    }).then(function(answer) {
        var query = 'SELECT id, ProductName, DepartmentName, Price, StockQuantity FROM Products WHERE ?'
        connection.query(query, {clothing: answer.clothing}, function(err, res) {
            for (var i = 0; i < answer.length; i++) {
                console.log("ID:" + res[i].id + " || ProductName: " + res[i].ProductName + " || DepartmentName:" + res[i].DepartmentName + " || Price:" + res[i].Price + " || StockQuantity:" + res[i].StockQuanity);
            }
            runSearch();
        })
    })
};

var foodSearch = function() {
    inquirer.prompt({
        name: "Food",
        type: "input",
        message: "Which food item would you like to purchase?"
    }).then(function(answer) {
        var query = 'SELECT id, ProductName, DepartmentName, Price, StockQuantity FROM Products WHERE ?'
        connection.query(query, {food: answer.food}, function(err, res) {
            for (var i = 0; i < answer.length; i++) {
                console.log("ID:" + res[i].id + " || ProductName: " + res[i].ProductName + " || DepartmentName:" + res[i].DepartmentName + " || Price:" + res[i].Price + " || StockQuantity:" + res[i].StockQuanity);
            }
            runSearch();
        })
    })
};
