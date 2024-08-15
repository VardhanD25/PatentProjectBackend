const express = require('express')

const {addElement,getElementSymbols}=require('../controllers/elementController');

const router = express.Router()

router.post('/',addElement)
router.get('/',getElementSymbols)

module.exports = router