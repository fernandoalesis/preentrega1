import{Router} from 'express'
import {CartManager} from '../managers/cartManager.js'

const router = Router()
const path = './src/file/Carts.json'
const carts = new CartManager(path)


//traer un carrito
router.get('/:cid', async (req,res)=>{})

//crear un carrito
router.post('/', async (req,res)=>{})

//agregar un producto a un carrito

router.post('/:cid/products/:pid', async (req,res)=>{
    const{cid, pid} = req.params
    const resp = await carts.addProductToCart(cid, {id:pid, quantity:1})
})


export default router