import asyncHandler from 'express-async-handler'
import Product from '../../models/eShopModels/productModel.js'
import Purchase from '../../models/eShopModels/purchaseModel.js'



// @desc    Fetch all purchases
// @route   GET /api/purchases
// @access  private/Admin
const getPurchases = asyncHandler(async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.squery.keyword,
            $options: 'i',
        }
    } : {}

    const count = await Purchase.countDocuments({ ...keyword })
    const purchases = await Purchase.find({ ...keyword }).populate('supplier', 'id name').limit(pageSize).skip(pageSize * (page - 1))
    res.json({ purchases, page, pages: Math.ceil(count / pageSize) })

})

// @desc    Delete a purchase
// @route   DELETE /api/purchases/:id
// @access  Private/Admin
const deletePurchase = asyncHandler(async (req, res) => {
    const purchase = await Purchase.findById(req.params.id)
    if (purchase) {
        await purchase.remove()
        res.json({ message: 'purchase removed' })
    } else {
        res.status(404)
        throw new Error('purchase not found')
    }
})

// @desc    Create a purchase
// @route   POST /api/purchases
// @access  Private/Admin
const createPurchase = asyncHandler(async (req, res) => {
    const {
        supplier,
        recieveAt,
        createAt,
        Arr,
        shippingCost,
        totalAmount,
        totalQty } = req.body;
    let purchaseItem = [];
    let stockQty = 0;
    let obj;
    for (let i = 0; i < Arr.length; i++) {
        let re = await Product.findOne({ name: Arr[i].product });
        if (re) {
            obj = { name: Arr[i].product, qty: Arr[i].quantity, price: Arr[i].price, product: re._id }
            purchaseItem.push(obj);
            if (re.quantity === undefined) {
                stockQty = 0;
            } else {
                stockQty = re.quantity
            }

            let profit = 5 * (parseInt(stockQty) + parseInt(Arr[i].quantity));
            let TotalSales = profit + (parseInt(stockQty) * parseInt(re.price)) + (parseInt(Arr[i].quantity) * parseInt(Arr[i].price));
            let result = TotalSales / (parseInt(stockQty) + parseInt(Arr[i].quantity));
            re.price = result;
            re.countInStock = re.countInStock + parseInt(Arr[i].quantity)
            re.save(err => {
                if (err) console.log(err)
            })
        }
    }
    const purchase = new Purchase({
        supplier: supplier,
        createdAt: createAt,
        purchaseAt: recieveAt,
        shippingCost: shippingCost,
        totalAmount: totalAmount,
        totalQty: totalQty,
        puchaseItems: purchaseItem
    })

    const purchased = await purchase.save(err => {
        if (err) {

            res.json({ error: "cantt not add purchase" })
        } else {
            res.status(201).json(purchased);
        }
    });

})

// @desc    Update a supplier
// @route   PUT /api/suppliers/:id
// @access  Private/Admin
const updatePurchase = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        tel,
        address,
    } = req.body
    const purchase = await Purchase.findById(req.params.id)
    if (purchase) {
        purchase.name = name
        purchase.email = email
        purchase.address = address
        purchase.tel = tel
        const updatedPurchase = await purchase.save()
        res.json(updatedPurchase)
    } else {
        res.status(404)
        throw new Error('Purchase not found')
    }
})

const getPurchaseDetail = asyncHandler(async (req, res) => {
    const purchase = await Purchase.findById(req.params.id);

    // const story = await Purchase.findOne({ id: req.params.id }).populate('puchaseItems');
    console.log(purchase)

    if (purchase) {
        res.json(purchase)
    } else {
        res.status(404)
        throw new Error('Purchase not found')
    }
})


export {
    updatePurchase,
    createPurchase,
    getPurchases,
    deletePurchase,
    getPurchaseDetail
}
