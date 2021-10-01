const express = require('express');
const cors = require('cors');
const routes = require('./api/routes/routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Aplicação crud');
});

module.exports = app;
