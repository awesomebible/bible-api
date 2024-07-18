const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// list all available bible translations (both obp modules and api.bible )
router.get('/', (req, res) => {
  res.send('infodump')
})

// handle OpenBibleProject modules
router.get('/obp/', (req, res) => {
    res.send('obp')
  })

// handle 
router.get('/abs/', (req, res) => {
    res.send('api.bible')
  })
module.exports = router