import { Router } from 'express'
import { ProductManager } from '../managers/productManager.js'

//instancias
const router = Router()
const path = './src/file/Products.json'
const products = new ProductManager(path)
//const path = '../file/Products.json'
 
//const products = new ProductManager(path)


//crud rutas
router.get('/', async (req, res) => {

    const { limit } = req.query

    if (limit === undefined || limit < 0 || isNaN(limit)) {

        res.send(await products.getProducts())

    } else {

        res.send(await products.getProductsLimit(limit))

    }
})

router.get('/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await products.getProductById(pid))

})

router.post('/', async (req, res) => {

    const { title, description, price , thumbnail, code, stock, category } = req.body

    if (!title || !description || !price || !code || !stock || !category ) return res.send({ status: 'error', error: 'faltan completar campos' })

    const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        category
    }

    res.status(200).send(await products.addProduct(newProduct))

})

router.put('/:pid', async (req, res) => {

    const { pid } = req.params
    const productToUpdate = req.body

    res.send(await products.updateProduct(pid, productToUpdate))

})


router.delete('/:pid', async (req, res) => {

    const { pid } = req.params

    //const productToDel = users.filter(user => user.id !== parseInt(uid))

    res.send(await products.deleteProduct(pid))

    //res.send({ status: 'success', payload: usersResult })

})

export default router