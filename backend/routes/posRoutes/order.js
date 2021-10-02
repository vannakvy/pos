import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    deleteOrder,
    getOrders,
    updateOrderToPaid,
updateOrderToDelivered,
updateToCancel
} from '../../controllers/posControllers/order.js'

router.route('/').get(getOrders).post(addOrderItems)
router.route('/:id').delete(deleteOrder).get(getOrderById)
router.route('/:id/pay').put(updateOrderToPaid)
router.route('/:id/cancel').put(updateToCancel)
router.route('/:id/deliver').put(updateOrderToDelivered)

export default router