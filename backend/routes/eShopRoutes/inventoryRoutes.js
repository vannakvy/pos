import express from 'express'
const router = express.Router()
import {getInventory,getPuchases,addPuchases,updatePuchase,deletePuchase, getOnePuchase, addRemovePuchaseFromStock,addSales, getSales} from '../../controllers/eShopControllers/inventoryControllers.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/sales/:id').post(addSales)
router.route('/').get(getInventory)
router.route('/sales').get(protect,admin,getSales)
router.route('/puchases/:id/arrived').put(addRemovePuchaseFromStock)
router.route('/puchases').get(getPuchases).post(addPuchases)
router.route('/puchases/:id').get(getOnePuchase).put(updatePuchase).delete(deletePuchase)
export default router
