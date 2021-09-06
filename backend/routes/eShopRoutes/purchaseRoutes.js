import express from 'express'
const router = express.Router()
import {
    getPurchases,
    deletePurchase,
    createPurchase,
    updatePurchase,
    getPurchaseDetail,
    getTotalPurchase
} from '../../controllers/eShopControllers/purchaseControllers.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').get(getPurchases).post(protect, admin, createPurchase)
router.route('/total').get(getTotalPurchase)
router
    .route('/:id')
    .delete(protect, admin, deletePurchase)
    .put(protect, admin).get(getPurchaseDetail)

export default router
