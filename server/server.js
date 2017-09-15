const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {LinkRequests} = require('./models/link_requests');

var app = express();
const port = process.env.PORT || 23324;

app.use(bodyParser.json());

app.get('/link_requests', (req, res) => {
  LinkRequests.find().then((lq) => {
    res.send({
      lq,
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // valid id using isValid
  if (!ObjectID.isValid(id)) {
    return res.status(400).send('ID is not valid');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  // valid id using isValid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('ID is not valid');
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      res.status(404).send('Todo not found');
    }
    res.send({todo});
  }).catch((e) => {
    res.status(404).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  // Pick only the properties we allow the user to update
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('ID is not valid');
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null; // remove value from database
  }
  // { new: true } return the updated object
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo}); // = { todo: todo }
  }).catch((e) => {
    res.status(400).send();
  })

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});



module.exports = {app};
