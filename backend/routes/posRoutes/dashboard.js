import express from 'express'
const router = express.Router()
import {
getTotalSale,
getSaleList,
getStock
} from '../../controllers/posControllers/dashboard.js'
// import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').get(getTotalSale)
router.route('/salelist').get(getSaleList)
router.route('/stock').get(getStock)

export default router