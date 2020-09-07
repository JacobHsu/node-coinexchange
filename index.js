const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const _ = require('lodash');

app.use(cors({credentials: true, origin: true}))
app.options('/products')

app.use('/market', router)

router.get('/test', function (req, res) {
  res.json({
    errno: 0,
    etf: './jobs/symbol'
  })
})

router.post('/symbol-thumb', function (req, res) {
  require('./jobs/symbol')(function(cb){
    const resTake = _.take(cb, 3)
    res.json(resTake)
  })
});

const port = process.env.PORT || 8000

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
  // http://localhost:8000/market/symbol-thumb
   // http://localhost:8000/market/test
})
