import express from 'express'
const router = express.Router()

import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').post().get()

    // router.route('/myorders').get(protect, getMyOrders)
    // router.route('/:id').get(protect, getOrderById)
    // router.route('/:id/pay').put(protect, updateOrderToPaid)
    // router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router