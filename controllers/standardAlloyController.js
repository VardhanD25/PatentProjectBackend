const StandardAlloy = require('../models/standardAlloyModel');

const addStandardAlloy = async (req, res) => {
    const { country, name, density, reference } = req.body;

    // Validate request body
    let emptyFields = [];
    
    if (!country) {
        emptyFields.push('country');
    }
    if (!name) {
        emptyFields.push('name');
    }
    if (density === undefined || density === null) {  // check for both undefined and null
        emptyFields.push('density');
    }
    if (!reference) {
        emptyFields.push('reference');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ message: `Missing required fields: ${emptyFields.join(', ')}` });
    }

    try {
        // Create a new StandardAlloy document
        const standardAlloyData = { country, name, density, reference };
        const standardAlloy = await StandardAlloy.create(standardAlloyData);
        
        res.status(201).json(standardAlloy);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllStandardAlloys = async (req, res) => {
    try {
      // Fetch all standard alloys from the database
      const alloys = await StandardAlloy.find({});
      
      // Respond with the fetched alloys
      res.status(200).json({ alloys });
    } catch (error) {
      console.error('Error fetching standard alloys:', error);
      res.status(500).json({ message: 'Failed to fetch standard alloys' });
    }
  };

const getStandardAlloy=async(req,res)=>{
    try{
        const {standardAlloyId} =req.params;
        const alloy=await StandardAlloy.findById(standardAlloyId);
        res.status(200).json({alloy});
    }
    catch(error){
        console.error('Error fetching standard alloy:',error);
        res.status(500).json({message:'Failed to fetch standard alloy'});
    }
};



module.exports = {
    addStandardAlloy,getAllStandardAlloys,getStandardAlloy
};
