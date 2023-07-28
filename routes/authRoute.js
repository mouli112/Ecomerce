const express = require('express');
const router = express.Router();
const {
    createUser,
    loginUserCtrl, 
    getallUser, 
    getUser, 
    deleteUser, 
    updateUser, 
    blockUser, 
    unblockUser, 
    handleRefreshToken, 
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword
} = require('../controller/userCtrl');
const {authMiddleware , isAdmin} = require('../middlewares/authMiddleware');

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken );
router.put("/reset-password/:token", resetPassword);
router.put('/password',authMiddleware,updatePassword);
router.post("/login", loginUserCtrl);
router.get("/all-users",getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout",logout);
router.get("/:id",authMiddleware,isAdmin,getUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware,isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware,isAdmin, unblockUser);
router.delete("/:id",deleteUser);

module.exports = router;