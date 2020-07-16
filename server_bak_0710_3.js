const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const Docker = require('dockerode');
const docker = new Docker({ host: '127.0.0.1', port: 4323 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/containers', function (req, res) {
  docker.listContainers({ all: false }, function (err, containers) {
    var list = '[';
    containers.forEach(function (container) {
      list =
        list +
        `{"Id" : "${container.Id}", "Created" : "${container.Created}", "State" : "${container.State}", "Status" : "${container.Status}"},`;
    });
    list = list + ']';
    res.send(list);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
