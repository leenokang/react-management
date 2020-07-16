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
  //docker.listContainers(function (err, containers) {
    //const idlist = containers[0].Id;
    res.send([{ Id: '1' }, { Id: '2' }]);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
