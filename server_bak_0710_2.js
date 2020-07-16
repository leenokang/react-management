const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/containers', (req, res) => {
  res.send([
    {
      id: '0e809d0a80b6599bad39d71bf2202bd36bcbfa8eb19a8300bb35b2ccadc54ba5',
      name: 'centos',
      states: 'active',
      fromImage: 'centos',
    },
    {
      id: '2',
      name: 'redhat',
      states: 'active',
      fromImage: 'redhat',
    },
    {
      id: '3',
      name: 'ubuntu',
      states: 'active',
      fromImage: 'ubuntu',
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
