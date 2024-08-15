const express = require('express')

const {addStandardAlloy, getAllStandardAlloys}=require('../controllers/standardAlloyController');


const router = express.Router()

router.post('/',addStandardAlloy)
router.get('/',getAllStandardAlloys)

module.exports = router