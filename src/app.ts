import express from 'express'
import './Database/connection.js'
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js'
import orderRoute from './routes/orderRoute.js'

import productRoute from './routes/productRoute.js'

import CartRoute from './routes/cartRoute.js'
import cors from 'cors'


const app = express()
app.use(express.json())

app.use(cors({
  origin: "*"
}))

app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute)
app.use("/category", categoryRoute)
app.use("/product", productRoute)
app.use("/order", orderRoute)
app.use("/cart", CartRoute)

app.use(express.static("./src/uploads"))  // ab yo folder ko data jasle ni access grna milyo 

export default app