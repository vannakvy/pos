import express from 'express'
const router = express.Router()
import {
    getSuppliers,
    deleteSupplier,
    createSupplier,
    updateSupplier,
} from '../../controllers/eShopControllers/supplierControllers.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').get(getSuppliers).post(protect, admin, createSupplier)
router
    .route('/:id')
    .delete(protect, admin, deleteSupplier)
    .put(protect, admin, updateSupplier)

export default router
