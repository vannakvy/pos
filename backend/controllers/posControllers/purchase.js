import asyncHandler from "express-async-handler";
// import Order from "../../models/orderModel.js";
// import Product from "../../models/eShopModels/productModel.js";
// import Purchase from "../../models/eShopModels/purchaseModel.js";
import Order from '../../models/eShopModels/orderModel.js'
import Product from '../../models/eShopModels/productModel.js'
import Purchase from '../../models/eShopModels/purchaseModel.js'

// @desc    Fetch all purchases
// @route   GET /api/purchases
// @access  private/Admin
const getPurchases = asyncHandler(async (req, res) => {
  // `/api/eshop/products?keyword=${keyword}&pageNumber=${pageNumber}&limit=${limit}`

  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword;
  const limit = req.query.limit || 5;

  //for changing the label name we want
  const purchaseLabel = {
    totalDocs: "itemCount",
    docs: "purchases",
    limit: "perPage",
    page: "currentPage",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pageCount",
    pagingCounter: "slNo",
    meta: "paginator",
  };

  const options = {
    page: page,
    limit: limit,
    customLabels: purchaseLabel,
  };
  let query = {};
  if (keyword) {
    query = {
      $and: [
        {
          $or: [
            { productName: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } },
            { remark: { $regex: keyword, $options: "i" } },
          ],
        },
      ],
    };
  }
  const products = await Purchase.paginate(query, options);
  res.json(products);
});

// @desc    Delete a purchase
// @route   DELETE /api/purchases/:id
// @access  Private/Admin
const deletePurchase = asyncHandler(async (req, res) => {
  try {
      console.log(req.params.id)
     await Purchase.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: "Deleted not successfully" });
  }
});

// @desc    Create a purchase
// @route   POST /api/purchases
// @access  Private/Admin
const createPurchase = asyncHandler(async (req, res) => {
  const {
    product,
    purchasePrice,
    purchaseShippingPrice,
    purchaseDate,
    purchaseQty,
    supplier,
    productName,
    category,
    remark,
  } = req.body;

  try {
    let prod = await Product.findById(product);
    if (!product) {
      throw new Error("There is not this product in the stock");
    }
    const purchase = new Purchase({
      product,
      purchasePrice,
      supplier,
      purchaseShippingPrice,
      purchaseDate,
      purchaseQty,
      productName,
      category,
      remark,
    });
    const created = await purchase.save();
    let updateProduct;
    if(created){
     updateProduct =  await Product.updateOne(
        { _id: product },
        { $inc: { inStock: purchaseQty } }
     );
    }
      
    if(!updateProduct){
      await Purchase.findByIdAndRemove(created._id);
      res.json({success:false,message:"Purhcase Create but cannot update the purchase"});
    }
  
    res.json({success:true,message:"Create successfully"});
  } catch (error) {
    res.json({success:false,message:"Cannot create the purchase"});
  }
});



// @desc    Update a supplier
// @route   PUT /api/suppliers/:id
// @access  Private/Admin
const updatePurchase = asyncHandler(async (req, res) => {
  const { 
    product,
    purchasePrice,
    supplier,
    purchaseShippingPrice,
    purchaseDate,
    purchaseQty,
    productName,
    category,
    remark,
  } = req.body;

  try {
    const purchase = await Purchase.findById(req.params.id);

    if (!purchase) {
     throw new Error("There is no Purchase with this id")
    }
   
    const updated = await Purchase.updateOne({_id:req.params.id},{
        product:product,
        purchasePrice:purchasePrice,
        purchaseShippingPrice:purchaseShippingPrice,
        purchaseDate:purchaseDate,
        purchaseQty:purchaseQty,
        supplier:supplier,
        productName:productName,
        category:category,
        remark:remark,
    });
      res.json({success:true,message:"purhcase updated successfully!"});
  } catch (error) {
      throw new Error("Cannot update purchase" + error)
  }

});

const getPurchaseDetail = asyncHandler(async (req, res) => {
  const purchase = await Purchase.findById(req.params.id)
    res.json(purchase);
});

// @desc    get total puchase
// @route   GET /api/suppliers/total
// @access  Private/Admin

const getTotalPurchase = asyncHandler(async (req, res) => {
  let graph_sale = await Order.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: "$totalPrice" },
      },
    },
    { $sort: { _id: 1 } },
    { $limit: 10 },
  ]);

  //graph for purchase
  let graph_purchase = await Purchase.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: "$price" },
      },
    },
    { $sort: { _id: 1 } },
    { $limit: 10 },
  ]);

  //popular product

  const popular = await Order.aggregate([
    { $unwind: "$orderItems" },
    { $group: { _id: "$orderItems.name", total: { $sum: 1 } } },
    // {$group:{_id:"orderItems.product",count:{$sum:1}}}
    { $sort: { total: -1 } },
    { $limit: 12 },
  ]);

  //total Stock
  let stock = await Purchase.aggregate([
    {
      $group: {
        _id: "$product",
        total: { $sum: { $multiply: ["$originPrice", "$qty"] } },
      },
    },
  ]);
  let stockRes = stock.reduce((acc, index) => {
    return acc + index.total;
  }, 0);

  //total sale

  const totalSale = await Order.aggregate([
    { $group: { _id: "_id", total: { $sum: 1 } } },
  ]);

  let result1 = totalSale.reduce((acc, index) => {
    return acc + index.total;
  }, 0);
  //total purchase
  let total = await Purchase.aggregate([
    {
      $group: {
        _id: "$product",
        total: { $sum: { $multiply: ["$price", "$qty"] } },
      },
    },
  ]);
  let result = total.reduce((acc, index) => {
    return acc + index.total;
  }, 0);
  // total Revenue
  const rev = result1 - result;

  let data = {
    graph_purchase,
    graph_sale,
    stock: stockRes,
    totalSale: result1,
    total: result,
    rev,
    popular,
  };
  res.json(data);
});

export {
  updatePurchase,
  createPurchase,
  getPurchases,
  deletePurchase,
  getPurchaseDetail,
  getTotalPurchase,
};
