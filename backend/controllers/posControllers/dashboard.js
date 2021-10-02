import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
import Order from '../../models/eShopModels/orderModel.js'
import Puchase from "../../models/eShopModels/purchaseModel.js";

// @desc    Get sale group by product 
// @route   GET /api/dashboard/salelist
// @access  Public

const getSaleList = asyncHandler(async (req,res)=>{
    const data = await Order.aggregate([
        {$match:{isPaid: true}},
        {$unwind:"$orderItems"},
        
        {$group:{_id:"$orderItems.name",totalQty:{$sum:"$orderItems.qty"} ,totalSaleAmount: { $sum: { $multiply: [ "$orderItems.price", "$orderItems.qty" ] } }}}
    ]);
    res.json(data)
});

// .aggregate([{$unwind:"$folderIds"},
//   {$group:{_id: "$folderIds",assets:{$push: {assets_id:"$_id"}}}}])

// @desc    Get total sale Today and all orders
// @route   GET /api/orders
// @access  Private/Admin
const getTotalSale = asyncHandler(async (req, res) => {
   
    const totalSaleToday = await Order.aggregate([
        {$match:{isPaid: true}},
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
    
    const totalSale = await Order.aggregate([{$match:{isPaid: true}}, { 
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

  //@Desc get stock 
const getStock = asyncHandler(async(req, res)=>{




    // const stock = await Order.aggregate([
    //     // {$match:{isPaid: true}},
    //     {$unwind:"$orderItems"},
    //     {$lookup:{
    //         from: "puchases",
    //         localField: "orderItems.product",
    //         foreignField: "product",
    //         as: "fd"
    //     }}
    // ]);
    const stock1 =await Order.aggregate([
        {$unwind:"$orderItems"},
        {$group:{_id:"$orderItems.product",productName: {$first:"$orderItems.name"},unitPrice : { $first: '$orderItems.price' },
        totalSaleQty:{$sum:"$orderItems.qty"},totalSaleAmount:{ $sum: { $multiply: [ "$orderItems.qty", "$orderItems.price" ] }}}}

]);

const stock2 = await Puchase.aggregate([
    {$group:{_id:"$product",purchaseQty:{$sum:"$purchaseQty"},totalPurchaseAmount:{ $sum: { $multiply: [ "$purchasePrice", "$purchaseQty" ] }}}}
]);

 const joinArray = (arr1, arr2) => {
    let arr = []
    arr1.map(load => {
        arr2.map(load1 => {
            if(load1._id.toString() ===load._id.toString()){
                arr.push({...load, ...load1})
                
            }
        })
    })
  return arr;
  }

// console.log(joinArray(stock1,stock2));
    res.json(joinArray(stock1,stock2))
});
 
export {
  getTotalSale,
  getSaleList,
  getStock
};
