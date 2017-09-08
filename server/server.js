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

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
