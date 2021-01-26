import express from 'express'
const router = express.Router()
import {getPuchases,addPuchases} from '../../controllers/eShopControllers/inventoryControllers.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/puchases').get(getPuchases).post(addPuchases)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router
