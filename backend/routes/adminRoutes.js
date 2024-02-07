import express from 'express'
const adminRouter = express.Router();
import { protect } from '../middleware/adminAuthMiddleware.js';
import { addUser, authAdmin, blockUnblockUser, deleteUser, getUpdateUserProfile, getUsers, logoutAdmin, updateUserProfile } from '../controllers/adminController.js'  


adminRouter.post('/auth', authAdmin);
adminRouter.post('/logout', logoutAdmin);
adminRouter.get('/users', protect, getUsers);
adminRouter.post('/users/add-user', protect, addUser);
adminRouter.delete('/users/delete', protect, deleteUser);
adminRouter.patch('/users/unblock-block', protect, blockUnblockUser); 
adminRouter.route('/users/update-user').get(protect, getUpdateUserProfile).put(protect, updateUserProfile);


export default adminRouter