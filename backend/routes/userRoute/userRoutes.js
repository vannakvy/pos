import express from 'express';
const router = express.Router();
import {
 authUser,
 registerUser,
 getUserProfile,
 updateUserProfile,
 getUsers,
 deleteUser,
 getUserById,
 updateUser,
 searchUser,
} from '../../controllers/userController/userControllers.js';
import { protect, admin } from '../../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router
 .route('/profile')
 .get(protect, getUserProfile)
 .put(protect, updateUserProfile);
router
 .route('/:id')
 .delete(protect, admin, deleteUser)
 .get(protect, admin, getUserById)
 .put(protect, admin, updateUser);

router.route('/search/uid').get(protect, admin, searchUser);
export default router;
