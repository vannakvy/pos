import asyncHandler from 'express-async-handler'
import Product from '../../models/eShopModels/productModel.js'
import Supplier from '../../models/eShopModels/supplierModel.js'


// @desc    Fetch all suppliers
// @route   GET /api/suppliers
// @access  private/Admin
const getSuppliers = asyncHandler(async (req, res) => {

    const suppliers = await Supplier.find();
    if (suppliers) {
        res.json(suppliers)
    } else {
        res.json({ error: "There is no Supplier" })
    }

})


// @desc    Delete a supplier
// @route   DELETE /api/suppliers/:id
// @access  Private/Admin
const deleteSupplier = asyncHandler(async (req, res) => {
    const supplier = await Supplier.findById(req.params.id)

    if (supplier) {
        await supplier.remove()
        res.json({ message: 'supplier removed' })
    } else {
        res.status(404)
        throw new Error('supplier not found')
    }
})

// @desc    Create a supplier
// @route   POST /api/suppliers
// @access  Private/Admin
const createSupplier = asyncHandler(async (req, res) => {
    const { name, email, tel, address } = req.body;
    const supplier = new Supplier({
        name: name,
        email: email,
        tel: tel,
        address: address
    })
    const createdSupplier = await supplier.save();
    res.status(201).json({ data: "dd" });
})

// @desc    Update a supplier
// @route   PUT /api/suppliers/:id
// @access  Private/Admin
const updateSupplier = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        tel,
        address,
    } = req.body
    const supplier = await Supplier.findById(req.params.id)
    if (supplier) {
        supplier.name = name
        supplier.email = email
        supplier.address = address
        supplier.tel = tel
        const updatedSupplier = await supplier.save()
        res.json(updatedSupplier)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})



export {
    updateSupplier,
    createSupplier,
    getSuppliers,
    deleteSupplier
}
