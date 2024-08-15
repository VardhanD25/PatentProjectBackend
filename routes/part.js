const express = require('express')

const{
    addPart,
    calculateDensity,
    getAllPartCodesForUser,
    getPartName,
    findSpecifiedDensity,
    calculateMasterSampleDensity,
    calculatePartDensity,
    calculateCompactnessRatio,
    updatePart,
    fetchPart
}=require('../controllers/partController')

const router=express.Router()

router.post('/',addPart)
router.get('/calculateDensity/:partCode', calculateDensity);
router.get('/specified-density/:partCode', findSpecifiedDensity);
router.get('/part-codes/:userId', getAllPartCodesForUser);
router.get('/part-name/:partCode', getPartName);
router.get('/master-sample-density', calculateMasterSampleDensity);
router.get('/calculate-part-density', calculatePartDensity);
router.get('/compactness-ratio',calculateCompactnessRatio);
router.patch('/updatepart',updatePart)
router.get('/:partCode',fetchPart)
module.exports = router