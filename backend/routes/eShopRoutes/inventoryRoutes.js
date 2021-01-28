import express from 'express'
const router = express.Router()
import {getPuchases,addPuchases,updatePuchase,deletePuchase, getOnePuchase} from '../../controllers/eShopControllers/inventoryControllers.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

router.route('/puchases').get(getPuchases).post(addPuchases)
router.route('/puchases/:id').get(getOnePuchase).put(updatePuchase).delete(deletePuchase)
export default router
