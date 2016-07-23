CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE Products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,	
	ProductName VARCHAR(30) NOT NULL,
    DepartmentName VARCHAR(30) NOT NULL,
	Price DECIMAL(4) NOT NULL,
	StockQuantity INTEGER(30) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Soap", "Cleaning", 3, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Sponge", "Cleaning", 3.00, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Broom", "Cleaning", 15.00, 50);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("T.V.", "Entertainment", 3000, 20);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Computer", "Entertainment", 1000, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("PS4", "Entertainment", 400, 5);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Hat", "Clothing", 20, 35);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Shirt", "Clothing", 25, 50);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Pants", "Clothing", 35, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Chicken", "Food", 10, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Fish", "Food", 15, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) value ("Beef", "Food", 20, 10);



SELECT * FROM Products;


