import expressAsyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
import Purchase from "../../models/eShopModels/purchaseModel.js";
import Order from "../../models/eShopModels/orderModel.js";
// import Sale from "../../models/eShopModels/saleModel.js";

// @desc    add puchses
// @route   POST /api/eshop/inventory/puchases
// @access  private
const addPuchases = asyncHandler(async (req, res) => {
  const {
    product,
    date,
    arrived,
    price,
    supplier,
    quantity,
    description,
  } = req.body;
  const prod = await Product.findOne({ name: product });
  const puchase = new Puchase({
    product: prod._id,
    date: date,
    price: price,
    supplier: supplier,
    quantity: quantity,
    arrived: arrived,
    description: description,
  });
  if (arrived === true) {
    prod.countInStock = prod.countInStock + parseInt(quantity);
    prod.save();
  }
  const createdPuchase = await puchase.save((err) => {
    if (err) {
      res.json({ error: "Cannot Add the to the Puchase" });
    } else {
      res.json(createdPuchase);
    }
  });
});

// @desc update puchase
// @route PUT /api/eshop/inventory/puchases/:id
// privacy private
const updatePuchase = asyncHandler(async (req, res) => {
  const {
    product,
    date,
    price,
    quantity,
    arrived,
    description,
    supplier,
  } = req.body;

  const prod = await Product.findOne({ name: product });
  const puchase = await Puchase.findById(req.params.id);
  if (puchase.arrived === true) {
    prod.countInStock = prod.countInStock - parseInt(puchase.quantity);
    prod.save();
  }

  if (arrived === true) {
    prod.countInStock = prod.countInStock + parseInt(quantity);
    prod.save();
  }

  if (puchase && prod) {
    (puchase.product = prod._id),
      (puchase.date = date),
      (puchase.quantity = quantity),
      (puchase.arrived = arrived),
      (puchase.price = price),
      (puchase.supplier = supplier),
      (puchase.description = description);
  }

  const updatedPuchase = await puchase.save();
  if (updatedPuchase) {
    res.json(updatedPuchase);
  } else {
    res.json({ error: "error" });
  }
});

// @desc    add puchses
// @route   GET /api/eshop/inventory/puchases
// @access  private
const getPuchases = asyncHandler(async (req, res) => {
  const puchases = await Puchase.find().populate({
    path: "product",
    select: "name",
  });
  if (puchases) {
    res.json(puchases);
  } else {
    json.res({
      error: "There is no puchases",
    });
  }
});

// @desc get one puchase
// @route GET api/eshop/inventory/puchases/:id
//@ privacy private

const getOnePuchase = asyncHandler(async (req, res) => {
  const puchase = await Puchase.findById(req.params.id);
  if (puchase) {
    res.json(puchase);
  } else {
    res.json({
      error: "There is no puchase with this id",
    });
  }
});
// @desc get one puchase
// @route GET api/eshop/inventory/puchases/:id
//@ privacy private
const deletePuchase = asyncHandler(async (req, res) => {
  const puchase = await Puchase.findById(req.params.id);
  if (puchase) {
    puchase.remove((err) => {
      if (!err) {
        res.json({ message: "Puchase deleted succesfully" });
      } else {
        res.json({
          error: "There is no puchase with this id",
        });
      }
    });
  }
});

// @desc add puchase to stock
// @route put api/eshop/inventory/stock/:id
//@ privacy private
const addRemovePuchaseFromStock = asyncHandler(async (req, res) => {
  const { arrived, product, quantity, price } = req.body;
  const prod = await Product.findById(product);
  const puchase = await Puchase.findById(req.params.id);
  if (prod && puchase) {
    if (arrived) {
      prod.countInStock = prod.countInStock - quantity;
      puchase.arrived = false;
    } else {
      prod.countInStock = prod.countInStock + quantity;
      puchase.arrived = true;
    }
    prod.save((err) => {
      if (err) {
        res.json({ error: "Cannot add to Stock" });
      } else {
        puchase.save();
        res.json({ message: "add to Stock succesfully !" });
      }
    });
  }
});

const addSales = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);

  let { orderItems, user } = order;
  let saledata;
  if (orderItems.length !== 0) {
    orderItems.map(
      (orderItem) => (
        (saledata = new Sale({
          product: orderItem.product,
          amount: orderItem.qty,
          price: orderItem.price,
          saleTo: user,
          date: Date.now(),
        })),
        saledata.save()
      )
    );
  }
  res.json({ message: "added" });
});

// @desc    Get all sales
// @route   GET /api/eshop/inventory/sales
// @access  Private/Admin
const getSales = asyncHandler(async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

// @desc    Get all inventory
// @route   GET /api/eshop/inventory
// @access  Private/Admin

const getInventory = asyncHandler(async (req, res) => {
  let inventory;

  res.json({ message: "Succed" });
});
export {
  addPuchases,
  getPuchases,
  updatePuchase,
  getOnePuchase,
  deletePuchase,
  addRemovePuchaseFromStock,
  addSales,
  getSales,
  getInventory,
};
