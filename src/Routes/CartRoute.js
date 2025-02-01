const express = require('express')
const { getCartById } = require('../Controllers/Cartcontroller')

const CartRoute = express.Router()

CartRoute.get('/:id',getCartById)

module.exports = CartRoute;