import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
import AdjustStock from "../../models/eShopModels/AdjustStock.js";

const getOrderWithPagination = asyncHandler(async (req, res) => {
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
  const limit = req.query.limit || 5;

  //for changing the label name we want

  const orderLabel = {
    totalDocs: "itemCount",
    docs: "products",
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
    customLabels: orderLabel,
  };
  let query = {};
  if (keyword) {
    query = {
      $and: [
        {
          $or: [
            { name: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } },
            { remark: { $regex: keyword, $options: "i" } },
          ],
        },
      ],
    };
  }

  const products = await Product.paginate(query, options);

  res.json(products);
});

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const { price, name, remark, category, inStock } = req.body;
  const product = new Product({
    name: name,
    category: category,
    price: price,
    remark: remark,
    inStock: inStock,
  });

  const createdProduct = await product.save((err) => {
    err
      ? res.status(201).json({ message: "cannot created" + err })
      : res.status(201).json({ message: "created" });
  });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { price, name, remark, category, inStock, active } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new Error("There isn't this product");
    }
    if (product) {
      product.name = name;
      product.price = price;
      product.category = category;
      product.active = active;
      product.remark = remark;
      product.inStock = inStock;
      await product.save();
      res.json({
        success: true,
      });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    throw new Error("Product cannot updated" + error);
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

//@Desc UPDATE STOCK BY ADJUSTING IT
//@ACCESS PRIVATE

const adjustStock = asyncHandler(async (req, res) => {

  try {
    let query = {};

    const { adjustStockType, remark, newStock, product } = req.body;

    const productExisted = await Product.findById(req.params.id);
    if (!productExisted) {
      throw new Error("there isn't this product in the stock.");
    }
    const created = new AdjustStock({
      adjustStockType: adjustStockType,
      newStock: newStock,
      remark: remark,
      actualStock: productExisted.endStock,
      product: product,
    });

    const adjust = await created.save();
    if (!adjust) {
      throw new Erro("Cannot save adjust to the database.");
    }

    if (adjustStockType === true) {
      query = { $inc: { inStock: newStock } };
    } else {
      query = { $set: { inStock: newStock } };
    }

    const updateProduct = await Product.updateOne(
      { _id: req.params.id },
      query
    );
    if (!updateProduct) {
      await AdjustStock.findByIdAndDelete(adjust._id);
      throw new Error("Adjust stock Added but cannot update the endStock");
    }
    res.json({ success: true, message: "the adjust created" });
  } catch (error) {
    throw new Error("Cannot do this action" +" "+ error.message);
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  adjustStock,
};
