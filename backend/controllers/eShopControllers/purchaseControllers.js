import asyncHandler from "express-async-handler";
import Order from "../../models/eShopModels/orderModel.js";
import Product from "../../models/eShopModels/productModel.js";
import Purchase from "../../models/eShopModels/purchaseModel.js";

1;
// @desc    Fetch all purchases
// @route   GET /api/purchases
// @access  private/Admin
const getPurchases = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.squery.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Purchase.countDocuments({ ...keyword });
  const purchases = await Purchase.find({ ...keyword })
    .populate("product", "id name")
    .populate("supplier", "id name")
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ purchases, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Delete a purchase
// @route   DELETE /api/purchases/:id
// @access  Private/Admin
const deletePurchase = asyncHandler(async (req, res) => {
  const purchase = await Purchase.findById(req.params.id);

  if (purchase) {
    if (purchase) {
      let prod;
      // for(let i=0;i<purchase.puchaseItems.length;i++){
      //     prod = await Product.findById(purchase.puchaseItems[i].product)
      //     prod.countInStock = prod.countInStock - purchase.puchaseItems[i].qty
      //     // prod.price =
      //     prod.save()
      // }
      // await purchase.remove();
    }
    res.json({ message: "purchase removed" });
  } else {
    res.status(404);
    throw new Error("purchase not found");
  }
});

// @desc    Create a purchase
// @route   POST /api/purchases
// @access  Private/Admin
const createPurchase = asyncHandler(async (req, res) => {
  const {
    product,
    unit,
    newPrice: price,
    supplier,
    shippingCost,
    purchaseAt,
    quantity,
  } = req.body;
  console.log(req.body);
  let prod = await Product.findById(product);
  !prod
    ? res.json({ error: "The product is not found" })
    : (prod.endStock = parseInt(prod.endStock) + parseInt(quantity));
  prod.endStockAmount =
    parseFloat(prod.endStockAmount) + parseInt(quantity) * parseFloat(price);
  console.log(prod.endStock);
  await prod.save((err) => {
    if (err) {
      res.json({ error: "Can not save this product", a: err });
    } else {
      const purchase = new Purchase({
        product,
        unit,
        price,
        supplier,
        shippingCost,
        purchaseAt,
        quantity,
      });
      purchase.save((err) =>
        err
          ? res.json({ message: "Cannot create the purchase", error: err })
          : res.json({ message: "Created sucessfully", purchase })
      );
    }
  });
});

// @desc    Update a supplier
// @route   PUT /api/suppliers/:id
// @access  Private/Admin
const updatePurchase = asyncHandler(async (req, res) => {
  const { name, email, tel, address } = req.body;
  const purchase = await Purchase.findById(req.params.id);
  if (purchase) {
    purchase.name = name;
    purchase.email = email;
    purchase.address = address;
    purchase.tel = tel;
    const updatedPurchase = await purchase.save();
    res.json(updatedPurchase);
  } else {
    res.status(404);
    throw new Error("Purchase not found");
  }
});

const getPurchaseDetail = asyncHandler(async (req, res) => {
  const purchase = await Purchase.findById(req.params.id)
    .populate("product", "name")
    .populate("author")
    .exec();

  // const story = await Purchase.findOne({ id: req.params.id }).populate('puchaseItems');
  // console.log(purchase)

  if (purchase) {
    res.json(purchase);
  } else {
    res.status(404);
    throw new Error("Purchase not found");
  }
});

// @desc    get total puchase 
// @route   GET /api/suppliers/total
// @access  Private/Admin

const getTotalPurchase = asyncHandler(async(req,res)=>{

  //data for graph purhcase and sale /order 

  // const orders = await Order.aggregate([

  // ]);
  let a = await Order.aggregate([
    { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"} }, count: { $sum: "$totalPrice" } } },
    { $sort: { _id: -1} },
    {$limit:10}
  ])

  //graph for purchase 
  let b = await Purchase.aggregate([
    { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"} }, count: { $sum: "$price" } } },
    { $sort: { _id: -1} },
    {$limit:10}
  ])
console.log(b)

//popular product 

const pop = await Order.aggregate([
  {$unwind: "$orderItems" },
  {$group: { _id: "$orderItems.product", total: { $sum: 1 } }},
  // {$group:{_id:"orderItems.product",count:{$sum:1}}}
  {$sort:{total:-1}},
  { $limit : 12 }
]);


  //total Stock 
  let stock = await Purchase.aggregate([
    {$group:{ _id:"$product", total: { $sum: { $multiply: [ "$originPrice", "$qty" ] }}}}
  ]);
  let stockRes = stock.reduce((acc,index)=>{
  return acc + index.total
  },0)


  //total sale 

const totalSale = await Order.aggregate([
  {$group:{_id:"_id",total:{$sum:1 }}}
]);

let result1 = totalSale.reduce((acc,index)=>{
  return acc + index.total
},0)
//total purchase 
let total = await Purchase.aggregate([
  {$group:{ _id:"$product", total: { $sum: { $multiply: [ "$price", "$qty" ] }}}}
]);
let result = total.reduce((acc,index)=>{
return acc + index.total
},0)
// total Revenue 
const rev = result1 - result ;
 


 res.json(result)
});



export {
  updatePurchase,
  createPurchase,
  getPurchases,
  deletePurchase,
  getPurchaseDetail,
  getTotalPurchase
};
