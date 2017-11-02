# Deneb Mongoose Intro
An overview for today's Mongoose lecture.

We are starting with an application that will run and serve our
index page with `npm start`. Some of the client-side markup is completed.

We will complete this application using Angular and Mongoose.

## Agenda

- [ ] Connect to Mongo using [Mongoose](http://mongoosejs.com/), a node module.
- [ ] Define a Mongoose Schema for our Documents.
- [ ] Create base GET, POST, PUT, and DELETE server-side routes.
- [ ] Implement the Mongoose syntax needed to support the above routes.
- [ ] Use Angular to add, display, update and delete people.
- [ ] Explore a pre-save hook provided by Mongoose.

### Install `mongoose`

In terminal, type `npm install mongoose --save`

To use this node module, we'll need to add the following to our server:

**server.js**

```JavaScript
/** -------- MONGOOSE CONNECTION --------**/
var mongoose = require('mongoose');
// mongo_lecture is the name of our database
var databaseUrl = 'mongodb://localhost:27017/deneb';

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

mongoose.connect(databaseUrl);
```

> NOTE: The above code should be moved into a module. We're putting it in the `server.js` to simplify this example.

### Define a Mongoose Schema for our Documents

Adding a [Schema](http://mongoosejs.com/docs/guide.html) allows us to enforce some rules on our data. Even with a Schema, we still have much more flexibility than with SQL.

**games.router.js**

```JavaScript
var GameSchema = new Schema({name: String, rating: Number, date: { type: Date, default: Date.now }}));
var Game = mongoose.model('Game', GameSchema, 'games');
```

## New Terms

* Mongoose schema
* Mongoose model
* Mongoose subdocument
* Hook

## New Syntax

Quick rundown of new syntax we will use to query our database using Mongoose.

### Mongoose Model Functions

* `find`
* `findById`
* `findByIdAndUpdate`
* `findByIdAndRemove`

### Mongoose Document Functions

* `save`

### Mongoose Schema Functions

* `pre`
