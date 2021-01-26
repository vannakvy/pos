import asyncHandler from 'express-async-handler'
import Product from '../../models/eShopModels/productModel.js'
import Puchase from '../../models/eShopModels/puchaseModel.js'

// @desc    add puchses
// @route   POST /api/eshop/inventory/puchases
// @access  private
const addPuchases = asyncHandler(async (req, res) => {
    // const Product = 
  console.log(req.body);
  res.json({msg: "message"})
})

// @desc    add puchses
// @route   GET /api/eshop/inventory/puchases
// @access  private
const getPuchases = asyncHandler(async (req, res) => {
    console.log("GET")
    console.log(req.body);
    res.json({msg: "message"})
  })


  export {addPuchases, getPuchases};