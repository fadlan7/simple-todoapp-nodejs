const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/todos');

app.use(express.json());
app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
  res.send('hello world!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});
