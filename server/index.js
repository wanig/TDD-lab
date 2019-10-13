const express = require('express')
const words = require('./words')
const app = express()

app.use('/', express.static('./app'));

// ?text=my%20text%20with%20words
app.get('/api/words/count/', function (req, res) {
  res.json({count : words.count(req.query.text) })
})

app.listen(3000, function () {
  console.log('Word count listening on port 3000!')
})