const express = require('express')
const router = express.Router()
const {getdata} = require('../controllers/getdata')

router.get('/',getdata)
module.exports = router