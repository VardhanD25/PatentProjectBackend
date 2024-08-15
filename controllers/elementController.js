const Element=require('../models/elementModel')

const mongoose = require('mongoose')

const addElement = async(req,res)=>{
    const {name,symbol,atomicNumber,density}=req.body;

    let emptyFields = [];

    if(!name){
        emptyFields.push('name');
    }
    if(!symbol){
        emptyFields.push('name');
    }
    if(!atomicNumber){
        emptyFields.push('name');
    }
    if(!density){
        emptyFields.push('name');
    }
    try{
        const elementData = {name,symbol,atomicNumber,density};

        const element=await Element.create(elementData);
        res.status(200).json(element);
    } catch(error){
        res.status(400).json({error:error.message});
    }
};

const getElementSymbols = async (req, res) => {
    try {
      // Fetch all elements from the database
      const elements = await Element.find({}, { symbol: 1, _id: 0 });
  
      // Extract symbols from the elements
      const symbols = elements.map(element => element.symbol);
  
      // Send the symbols as a response
      res.status(200).json({ symbols });
    } catch (error) {
      console.error('Error fetching element symbols:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  


module.exports = {
    addElement,
    getElementSymbols
}