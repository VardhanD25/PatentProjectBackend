const express = require('express')

const {addStandardAlloy, getAllStandardAlloys, getStandardAlloy}=require('../controllers/standardAlloyController');


const router = express.Router()

router.post('/',addStandardAlloy)
router.get('/',getAllStandardAlloys)
router.get('/:standardAlloyId',getStandardAlloy)

module.exports = router