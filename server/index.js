const express = require('express')
const words = require('./words')
const app = express()

app.use('/', express.static('./app'));

// ?text=my%20text%20with%20words
app.get('/api/words/count/', async function (req, res) {
  const count = await words.count(req.query.text);
  res.json({count});
})

app.listen(3000, function () {
  console.log('Word count listening on port 3000!')
})