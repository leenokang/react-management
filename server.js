const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const Docker = require('dockerode');
const docker = new Docker({ host: '127.0.0.1', port: 4323 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/containers', (req, res) => {
  docker.listContainers({ all: true }, function (err, containers) {
    res.send(containers);
  });
});

app.post('/api/containers', (req, res) => {
  console.log(req.body);
  let Image = req.body.Image;
  let Cmd = req.body.Cmd;
  let name = req.body.name;
  console.log(Image);
  console.log(Cmd);
  console.log(name);
  docker.createContainer(
    {
      Image: 'Image',
      Cmd: Cmd,
      name: 'name',
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
      OpenStdin: false,
      StdinOnce: false,
    },
    function (err, container) {
      console.log(container);
      container.start(function (err, data) {
        res.status(200).send('success');
      });
    }
  );
});

/*
app.post('/api/containers', (req, res) => {
  let Image = req.body.Image;
  let Cmd = req.body.Cmd;
  let name = req.body.name;
  docker.createContainer(
    {
      Image: 'ubuntu:latest',
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
      OpenStdin: false,
      StdinOnce: false,
      Cmd: ['/bin/bash'],
      name: 'utest4',
    },
    function (err, container) {
      console.log(container);
      container.start(function (err, data) {
        res.status(200).send('succcess');
        console.log(container);
      });
    }
  );
});
*/

app.delete('/api/containers/:id', (req, res) => {
  let params = [req.params.id];
  let container = docker.getContainer(`${params}`);
  container.stop(function (err, data) {
    res.status(200).send('success');
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
