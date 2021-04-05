import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
import Purchase from "../../models/eShopModels/purchaseModel.js";
import Price from "../../models/eShopModels/priceModel.js";

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
      console.log(purchase);
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
  const { Arr, purchaseAt } = req.body;
  let purchaseItem = [];

  let i;
  let price;
  let obj;
  let savePrice;
  let totalQty = 0;
  let totalAmount = 0;
  let prod;

  if (Arr) {
    for (i = 0; i < Arr.length; i++) {
      price = new Price({
        date: purchaseAt,
        product: Arr[i].product,
        price: Arr[i].salePrice,
      });
      savePrice = await price.save();
      prod = await Product.findById(Arr[i].product);
      // if (prod) {
      //   prod.countInStock.balanceQty =
      //     prod.countInStock.balanceQty + Arr[i].qty;
      //   prod.countInStock.balanceAmount =
      //     prod.countInStock.balanceAmount + Arr[i].qty * Arr[i].price;
      //   await prod.save();
      // }

      console.log(prod.countInStock.balanceQt, prod.countInStock.balanceAmount);

      obj = {
        unit: Arr[i].unit,
        product: Arr[i].product,
        qty: Arr[i].quantity,
        price: Arr[i].price,
        salePrice: savePrice._id,
        supplier: Arr[i].supplier,
        shippingCost: Arr[i].shippingCost,
      };
      purchaseItem.push(obj);
      totalQty = parseInt(totalQty) + parseInt(Arr[i].quantity);
      totalAmount =
        parseInt(totalAmount) +
        parseInt(Arr[i].price) * parseInt(Arr[i].quantity);
    }
  }

  const purchase = new Purchase({
    purchaseAt: purchaseAt,
    totalAmount: totalAmount,
    totalQty: totalQty,
    purchaseItems: purchaseItem,
  });
  let a = purchase.save((err) =>
    err
      ? res.json({ message: "Cannot create the purchase" })
      : res.json({ message: "Created sucessfully" })
  );
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

export {
  updatePurchase,
  createPurchase,
  getPurchases,
  deletePurchase,
  getPurchaseDetail,
};
