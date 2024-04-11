import{Router} from 'express'
import {CartManager} from '../managers/cartManager.js'

//instancias
const cartsRouter = Router()
const path = './src/file/Carts.json'
const carts = new CartManager(path)

cartsRouter.post('/', async (req, res) => {

    const { products: [] } = req.body

    const newCart = {

        products: []

    }

    res.status(200).send(await carts.createCart(newCart))

}) 

cartsRouter.get('/:cid', async (req, res) => {

    const { cid } = req.params

    res.send(await carts.getCartById(cid))

})

cartsRouter.post('/:cid/products/:pid ', async (req, res) => {

    const { cid, pid } = req.params

    const answer = await carts.addProductToCart(cid, {product:pid, quantity:1}) 

    res.send(await carts.addProductToCart(cid, pid))

})
export default cartsRouter