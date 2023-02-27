const express = require('express')

const {createEmail} = require('../controllers/emailAuth.js')

const router = express.Router()

router.route('/').post(createEmail)

module.exports = router