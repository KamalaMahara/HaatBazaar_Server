import express, { Router } from 'express'
import orderController from '../controller/orderController.js'
import userMiddleware, { Roles } from '../middleware/userMiddleware.js'
import errorHandler from '../services/errorHandler.js'
const router: Router = express.Router()

router.route("/").post(userMiddleware.isUserLoggedIn, errorHandler(orderController.createOrder)).get(userMiddleware.isUserLoggedIn, errorHandler(orderController.fetchMyOrders))

router.route("/verify-pidx").post(userMiddleware.isUserLoggedIn, errorHandler(orderController.verifyTransaction))


router.route("/admin/change-order-status/:id").post(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Admin), errorHandler(orderController.changeOrderStatus))

router.route("/admin/delete-order/:id").post(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Admin), errorHandler(orderController.deleteOrder))


router.route("/cancel-order/:id").patch(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Customer), errorHandler(orderController.cancelMyOrder))

router.route("/:id").get(userMiddleware.isUserLoggedIn, errorHandler(orderController.fetchMyOrderDetail))





export default router