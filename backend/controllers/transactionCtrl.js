const asyncHandler = require("express-async-handler");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");




const transactionController = {
  //!add
  create: asyncHandler(async (req, res) => {
    const { type, category, amount, date,description } = req.body;
    if(!category || !type || !amount || !date || !description){
      throw new Error('Name, type, date, amount and description are required')
    }
    // create 
    const transaction = await Transaction.create({
      user: req.user,
      type,
      category,
      amount,
      description,
    });
    res.status(201).json(transaction);
    

  }),
  //!Lists
  getFilteredTransaction: asyncHandler(async (req, res) => {
    const {startDate, endDate, type, category} = req.query
    let filters = {user: req.user};
    if(startDate){
      filters.date = {...filters.date, $gte: new Date(startDate)}
    }
    if(endDate){
      filters.date = {...filters.date, $lte: new Date(startDate)}
    }
    if(type){
      filters.type = {types}
    }
    if(category){
      if(category == 'All'){

      }else if(category=='Uncategorized'){
        filters.category = "Uncategorized"
      } else{
        filters.category = category;
      }
    }
        const transactions =  await Transaction.find(filters).sort({date: -1});

    res.json(transactions);
  }),

  //!update
  update: asyncHandler(async (req, res) => {
    
  }),
  //! delete
  delete: asyncHandler(async (req, res) => {
    
  }),
  
};

module.exports = transactionController;