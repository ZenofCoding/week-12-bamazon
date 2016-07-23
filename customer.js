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
           /* 
            case 'Find all artists who appear more than once':
                multiSearch();
            break;
            
            case 'Find data within a specific range':
                rangeSearch();
            break;
            
            case 'Search for a specific song':
                songSearch();
            break;*/
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
            for (var i = 0; i < res.length; i++) {
                console.log("ID:" + res[i].id + " || ProductName: " + res[i].ProductName + " || DepartmentName:" + res[i].DepartmentName + " || Price:" + res[i].Price + " || StockQuantity:" + res[i].StockQuanity);
            }
            runSearch();
        })
    })
};

/*var entertainmentSearch = function() {
    var query = 'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
        }
        runSearch();
    })
};

var clothingSearch = function() {
    inquirer.prompt([{
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {
        var query = 'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
        connection.query(query, [answer.start, answer.end], function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
            }
            runSearch();
        })
    })
};

var foodSearch = function() {
    inquirer.prompt({
        name: "song",
        type: "input",
        message: "What song would you like to look for?"
    }).then(function(answer) {
        console.log(answer.song)
        connection.query('SELECT * FROM top5000 WHERE ?', {song: answer.song}, function(err, res) {
            console.log("Position: " + res[0].position + " || Song: " + res[0].song + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
            runSearch();
        })
    })
};
*/