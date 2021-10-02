import express from 'express'
const router = express.Router()
import {
    updatePurchase,
    createPurchase,
    getPurchases,
    deletePurchase,
    getPurchaseDetail,
    getTotalPurchase,
} from '../../controllers/posControllers/purchase.js'
// import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').get(getPurchases).post(createPurchase)
router.route('/total').get(getTotalPurchase)
router
    .route('/:id')
    .delete(deletePurchase)
    .put(updatePurchase).get(getPurchaseDetail)
export default router