import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
import Order from '../../models/eShopModels/orderModel.js'

// @desc    Get sale group by product 
// @route   GET /api/dashboard/salelist
// @access  Public

const getSaleList = asyncHandler(async (req,res)=>{
    const data = await Order.aggregate([
        {$unwind:"$orderItems"},
        {$group:{_id:"orderItems.name", totalSaleAmount: { $sum: { $multiply: [ "$price", "$qty" ] } }}}
    ]);
console.log(data)
    res.json(data)
});

// .aggregate([{$unwind:"$folderIds"},
//   {$group:{_id: "$folderIds",assets:{$push: {assets_id:"$_id"}}}}])

// @desc    Get total sale Today and all orders
// @route   GET /api/orders
// @access  Private/Admin
const getTotalSale = asyncHandler(async (req, res) => {
   
    const totalSaleToday = await Order.aggregate([
        {$match:{createdAt:{$gte:new Date(new Date().setUTCHours(0,0,0,0)),$lt: new Date(new Date().setUTCHours(23,59,59,59))}}},
        {
        $group: { 
            _id: null, 
            total: { 
                $sum: "$totalPrice" 
            } 
        } 
    }
    ])
    const totalProduct = await Product.countDocuments({});
    
    const totalSale = await Order.aggregate([ { 
        $group: { 
            _id: null, 
            total: { 
                $sum: "$totalPrice" 
            } 
        } 
    } ] )

    res.json({
        totalProduct:totalProduct,
        totalSale: totalSale,
        totalSaleToday:totalSaleToday
    });
  });
 

export {
  getTotalSale,
  getSaleList
};
