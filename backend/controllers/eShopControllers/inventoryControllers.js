<<<<<<< HEAD

import asyncHandler from 'express-async-handler'
import Product from '../../models/eShopModels/productModel.js'
import Puchase from '../../models/eShopModels/puchaseModel.js'
=======
import asyncHandler from 'express-async-handler';
import Product from '../../models/eShopModels/productModel.js';
import Puchase from '../../models/eShopModels/puchaseModel.js';
>>>>>>> 0f5e5ae2c70411d1c734a37af53f241c01a40a32

// @desc    add puchses
// @route   POST /api/eshop/inventory/puchases
// @access  private
const addPuchases = asyncHandler(async (req, res) => {
<<<<<<< HEAD
  const {product,date,arrived,price,supplier,quantity,description} = req.body;
  const prod = await Product.findOne({name:product});
    const puchase = new Puchase({
      product: prod._id,
      date: date,
      price: price,
      supplier: supplier,
      quantity: quantity,
      arrived: arrived,
      description: description
    })
    if(arrived ===true){
     prod.countInStock = prod.countInStock + parseInt(quantity)
     prod.save()
    }
  const createdPuchase = await puchase.save(err=>{
    if(err){
      res.json({error: "Cannot Add the to the Puchase"})
    }else{
      res.json(createdPuchase)
    }
    
})
})
=======
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
>>>>>>> 0f5e5ae2c70411d1c734a37af53f241c01a40a32

// @desc update puchase
// @route PUT /api/eshop/inventory/puchases/:id
<<<<<<< HEAD
// privacy private 
const updatePuchase = asyncHandler(async(req,res)=>{
  const {product, date, price, quantity,arrived,description, supplier} = req.body;

  const prod = await Product.findOne({name:product});
  const puchase = await Puchase.findById(req.params.id);
  if(puchase.arrived ===true){
    prod.countInStock = prod.countInStock - parseInt(puchase.quantity)
    prod.save()
   }

   if(arrived===true){
    prod.countInStock = prod.countInStock + parseInt(quantity)
    prod.save()
   }

  if(puchase && prod){
    puchase.product = prod._id,
    puchase.date = date,
    puchase.quantity = quantity,
    puchase.arrived = arrived,
    puchase.price = price,
    puchase.supplier = supplier,
    puchase.description = description
  }

  const updatedPuchase = await puchase.save();
  if(updatedPuchase){
    res.json(updatedPuchase)
  }else{
    res.json({error: "error"})
  }
})

=======
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
>>>>>>> 0f5e5ae2c70411d1c734a37af53f241c01a40a32
// @desc    add puchses
// @route   GET /api/eshop/inventory/puchases
// @access  private
const getPuchases = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const puchases = await Puchase.find().populate({ path: 'product', select: 'name' });
    if(puchases){
      res.json(puchases)
    }else{
      json.res({
        error: "There is no puchases"
      })
    }
  })
=======
 const puchases = await Puchase.find();
 if (puchases) {
  res.json(puchases);
 } else {
  json.res({
   error: 'There is no puchases',
  });
 }
});
>>>>>>> 0f5e5ae2c70411d1c734a37af53f241c01a40a32

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
<<<<<<< HEAD
      error: "There is no puchase with this id"
    })
  }
})
  // @desc get one puchase 
  // @route GET api/eshop/inventory/puchases/:id
  //@ privacy private 
  const deletePuchase = asyncHandler(async(req, res)=>{
    const puchase = await Puchase.findById(req.params.id);
    if(puchase){
      puchase.remove(err=>{
        if(!err){
          res.json({message: "Puchase deleted succesfully"})
        }else{
          res.json({
            error: "Cannot Delete this puchase"
          })
        }
      });
    }else{
      res.json({error: "There is no puchase with this number"})
    }
  })

  // @desc add puchase to stock 
  // @route put api/eshop/inventory/stock/:id
  //@ privacy private 
export const addRemovePuchaseFromStock = asyncHandler(async(req, res)=>{
  const {arrived,product, quantity, price} = req.body;
    const prod = await Product.findById(product);
    const puchase = await Puchase.findById(req.params.id);
    if(prod && puchase ){
      if(arrived){
        prod.countInStock = prod.countInStock - quantity; 
        puchase.arrived = false
      }else{
        prod.countInStock = prod.countInStock + quantity;
        puchase.arrived = true
      }
      prod.save(err=>{
        if(err){
          res.json({error: "Cannot add to Stock"})
        }else{
          puchase.save();
          res.json({message:"add to Stock succesfully !"})
        }
      })
    }

})
=======
     error: 'Cannot Delete this puchase',
    });
   }
  });
 } else {
  res.json({ error: 'There is no puchase with this number' });
 }
});
>>>>>>> 0f5e5ae2c70411d1c734a37af53f241c01a40a32

export {
 addPuchases,
 getPuchases,
 updatePuchase,
 getOnePuchase,
 deletePuchase,
};
