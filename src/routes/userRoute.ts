import express from 'express'
import AuthController from '../controller/userController.js'
const router = express.Router()
import errorHandler from '../services/errorHandler.js'
import userMiddleware, { Roles } from '../middleware/userMiddleware.js'

router.route("/register").post(errorHandler(AuthController.registerUser))
router.route("/login").post(errorHandler(AuthController.loginUser))
router.route("/logout").post(errorHandler(AuthController.logoutUser))

router.route("/forgot-password").post(errorHandler(AuthController.forgotPassword))

router.route("/verifyOtp").post(errorHandler(AuthController.verifyOtp))


router.route("/resetpassword").post(errorHandler(AuthController.resetpassword))

router.route("/users").get(errorHandler(AuthController.fetchUsers))



export default router
