import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  adjustStock
} from '../../controllers/posControllers/product.js'
// import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(createProduct)
// router.route('/:id/reviews').post(createProductReview)
// router.get('/top', getTopProducts)
router.route('/:id/adjust').post(adjustStock);
router
  .route('/:id')
  .get(getProductById)
  .delete( deleteProduct) 
  .put(updateProduct)

export default router 