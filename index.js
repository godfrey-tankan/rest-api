const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).send({
    api: 'Hello user!',
    size: '200'
  });
});

app.post('/api/:id', (req, res) => {
  const { id } = req.params;
  const { age } = req.body;
  if (!age) {
    res.status(418).send({
      message: 'We need your age!'
    });
    return;
  }
  res.send({
    api: `You are ${id} years old!`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});