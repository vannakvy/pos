import asyncHandler from 'express-async-handler';
import Product from '../../models/eShopModels/productModel.js';
import Puchase from '../../models/eShopModels/puchaseModel.js';

// @desc    add puchses
// @route   POST /api/eshop/inventory/puchases
// @access  private
const addPuchases = asyncHandler(async (req, res) => {
 const { product, date, price, quantity, arrived, description } = req.body;
 const puchase = new Puchase({
  product: product,
  date: date,
  price: price,
  quantity: quantity,
  arrived: arrived,
  description: description,
 });
 const createdPuchase = await puchase.save((err) => {
  if (err) {
   res.json({ error: 'Cannot Add the to the Puchase' });
  } else {
   res.json({ message: 'Puchases Created Successfully' });
  }
 });
});

// @desc update puchase
// @route PUT /api/eshop/inventory/puchases/:id
// privacy private
const updatePuchase = asyncHandler(async (req, res) => {
 const { product, date, price, quantity, arrived, description } = req.body;
 const puchase = await Puchase.findById(req.params.id);
 if (puchase) {
  (puchase.product = product),
   (puchase.date = date),
   (puchase.quantity = quantity),
   (puchase.arrived = arrived),
   (puchase.price = price),
   (puchase.description = description);

  updatedPuchase = await puchase.save((err) => {
   if (err) {
    res.json({ message: 'Updated Successfully' });
   } else {
    res.json({
     error: 'Cannot Update the Puchases',
    });
   }
  });
 } else {
  res.json({ error: 'The is no puchase to update' });
 }
});
// @desc    add puchses
// @route   GET /api/eshop/inventory/puchases
// @access  private
const getPuchases = asyncHandler(async (req, res) => {
 const puchases = await Puchase.find();
 if (puchases) {
  res.json(puchases);
 } else {
  json.res({
   error: 'There is no puchases',
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
   error: 'There is no puchase with this id',
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
    res.json({ message: 'Puchase deleted succesfully' });
   } else {
    res.json({
     error: 'Cannot Delete this puchase',
    });
   }
  });
 } else {
  res.json({ error: 'There is no puchase with this number' });
 }
});

export {
 addPuchases,
 getPuchases,
 updatePuchase,
 getOnePuchase,
 deletePuchase,
};
