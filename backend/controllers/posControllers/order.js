import asyncHandler from "express-async-handler";
import Order from "../../models/eShopModels/orderModel.js";
// import Sale from '../../models/eShopModels/saleModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    client,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
    discount,
    currency,
    invoiceID,
    deliveredBy,
    remark
  } = req.body;
  let exist = await Order.findOne({invoiceID:invoiceID});
  if(exist){
    throw new Error("the order with this invoice id is already exist");
  }

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");

  } else {
    const order = new Order({
      orderItems,
      client,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      currency,
      discount,
      invoiceID,
      deliveredBy,
      remark,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }

  // res.json({ message: "d" });
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});


//@Desc Get allProduct with pagination 
//@route GET /api/orders 

const getOrderWithPagination = asyncHandler(async(req, res)=>{
  // const options = {
  //   page: 1,
  //   limit: 10,
  //   collation: {
  //     locale: 'en',
  //   },
  // };

  // `/api/eshop/products?keyword=${keyword}&pageNumber=${pageNumber}&limit=${limit}`

  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword;
  const limit = req.query.limit||5;

//for changing the label name we want 

  const orderLabel = {
    totalDocs: 'itemCount',
    docs: 'orders',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
  };
  
  const options = {
    page: page,
    limit: limit,
    customLabels: orderLabel,
  };
  let query = {};
  if(keyword){
   query = {
    $and: [
      {
        $or: [
          { invoiceID: { $regex: keyword, $options: "i" } },
          { client: { $regex: keyword, $options: "i" } },
          { deliveredBy: { $regex: keyword, $options: "i" } },
          { shippingAddress: { $regex: keyword, $options: "i" } },
          { remark: { $regex: keyword, $options: "i" } },
        ],
      },]}
    }

const orders = await Order.paginate(query,options);

res.json(orders)

});


// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const deleteOrder = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.findByIdAndDelete(req.params.id);
    res.json({delete:true})
  } catch (error) {
    throw new Error("cannot delete")
  }
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).sort({createdAt:-1});
  res.json(orders);
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentMethod = req.body.paymentMethod;
    const updatedOrder = await order.save();
    res.json({success:true,message:"Update successfully !"});
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json({success:true,message:"Update successfully !"});
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});


export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  deleteOrder,
  getOrders,
};
