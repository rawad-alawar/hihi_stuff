# SQL joins

Let's play with joins and some data modelling concepts

### 1. Checkout these resources

* [SQL join on w3schools](http://www.w3schools.com/sql/sql_join.asp)
* [Overview of joins](http://www.tutorialspoint.com/sql/sql-using-joins.htm)

Notice how in the w3schools tutorial the select clause is `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate` whereas in the tutorialspoint one, it is `SELECT ID, NAME, AGE, AMOUNT`?

In SQL the table prefix before the `.` is optional in select clauses but it is more maintainable. If a future developer changed the database structure of the second example so that the Orders table had a name column as well that SQL query would stop working, whereas the w3schools example is more verbose but less maintainable.

### Complete exercise

1. Create a database using a [knex migration](http://knexjs.org/#Migrations) (as in the sql-intro challenge) or a raw `knex-create-db.js` (as in the auth challenge).
2. Access your database using the FireFox SQLite manager.
3. Create tables with the SQL statement below.
4. [`INSERT`](http://www.w3schools.com/sql/sql_insert.asp) some records into both tables that have the same `PersonID`.
5. Write an `INNER JOIN` query which prints out the address and name of all the cats that belong to a particular person.
6. Bonus revision points: update records and delete records via the SQLite manager tool. See if you can write the SQL statement from memory.
7. More bonus points: Use the [`ALTER`](http://www.w3schools.com/sql/sql_alter.asp) statement to add an age field to a cat.

```
CREATE TABLE Persons (
  PersonID INTEGER,
  LastName VARCHER(255),
  FirstName VARCHER(255),
  Email VARCHAR(255),
  Address VARCHER(255),
  City VARCHER(255)
);

CREATE TABLE Cats (
  CatID INTEGER,
  PersonID INTEGER,
  Name VARCHER(255)
);
```

### 3. Use knex Query Builder and JavaScript

You want more bonus points?! Well ok.

1. Check out the [knex join builder](http://knexjs.org/#Builder-join) docs.
2. Create a new node project from scratch and configure knex to point to your newly created database
3. Make your project print out the same outputs as step 7 by running your node project over the command line (e.g. `node index.js`). Use the knex join builder to create the query.

### 3. Data modelling

We really need to talk about your addiction to bonus points, this is getting out of hand.

1. Watch this video introducing the idea of [Entity Relationship Diagrams](https://www.youtube.com/watch?v=-fQ-bRllhXc).
2. [This tutorial](http://www.tutorialspoint.com/dbms/er_diagram_representation.htm) might be useful as well.
3. Choose any domain that interests you and try to model it with an entity relationship diagram.

### 4. Routes

Setup an express app with a route for searching cats by a person's email e.g. `GET /cats?email=hello@example.com`. Have the route listener query the database and respond with the correct cats.

