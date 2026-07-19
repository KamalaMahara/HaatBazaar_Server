
import userMiddleware, { Roles } from "../middleware/userMiddleware.js"

import express, { Router } from "express"
import CategoryController from "../controller/CategoryController.js"
const router: Router = express.Router()


router.route("/").get(CategoryController.getCategories)
  .post(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Admin), CategoryController.addCategory)

router.route("/:id")
  .patch(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Admin), CategoryController.updateCategories)
  .delete(userMiddleware.isUserLoggedIn, userMiddleware.accessTo(Roles.Admin), CategoryController.deleteCategories)

export default router