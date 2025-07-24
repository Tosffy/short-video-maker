const express = require('express');
const app = express();
const port = process.env.PORT || 3123;

app.get('/', (req, res) => {
  res.send('Short Video Maker Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
