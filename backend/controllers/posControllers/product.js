import asyncHandler from "express-async-handler";
import Product from "../../models/eShopModels/productModel.js";
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// const getProductWithPagination = asyncHandler(async (req, res) => {
//   const pageSize = 10;
//   const page = Number(req.query.pageNumber) || 1;
//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};
//   const count = await Product.countDocuments({ ...keyword });
//   const products = await Product.find({ ...keyword })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1));
//   res.json({ products, page, pages: Math.ceil(count / pageSize) });
// });


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
    docs: 'products',
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
          { name: { $regex: keyword, $options: "i" } },
          { category: { $regex: keyword, $options: "i" } },
          { remark: { $regex: keyword, $options: "i" } },
        ],
      },]}
    }

const products = await Product.paginate(query,options);

res.json(products)

});

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ });
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
  const { price, name, remark, category,inStock } = req.body;
  const product = new Product({
    name: name,
    category: category,
    price: price,
    remark:remark,
    inStock:inStock
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

    const { price, name, remark, category,inStock  } = req.body;
      const product = await Product.findById(req.params.id);
      if (product) {
        product.name = name;
        product.salePrice = salePrice;
        product.description = description;
        product.image = image;
        product.category = category;
      
        await product.save();
        res.json({
          success:true 
        });
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    
  } catch (error) {
    throw new Error("Product cannot updated");
  }
 
});



// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
};
