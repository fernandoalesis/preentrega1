import express from 'express'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//asd
const main = () => {

    
    app.use('/api/products', productsRouter)
    app.use('/api/carts', cartsRouter)


    app.listen(8080, error => {

        console.log('Escuchando el puerto 8080')

    })
}

main()