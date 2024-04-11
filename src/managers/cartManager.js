import fs from 'node:fs'

export class CartManager {

    constructor(path) {

        this.path = path
    }

    readFile = async () => {

        try {
            const dataJson = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(dataJson)

        } catch (error) {

            console.log(error)
            return []

        }
    }

    createCart = async (cart) => {

        try {

            const cartsDataBase = await this.readFile()

            if (cartsDataBase.length === 0) {

                cart.id = 1

            } else {

                cart.id = cartsDataBase[cartsDataBase.length - 1].id + 1;

            }

            cartsDataBase.push(cart)

            await fs.promises.writeFile(this.path, JSON.stringify(cartsDataBase, null, '\t'), 'utf-8')

        } catch (error) {
            console.log(error)
        } 

    }

    getCartById = async (cid) => {
        try {

            const cartsDataBase = await this.readFile()

            const cardID = cartsDataBase.find(cart => cart.id === parseInt(cid))

            if (!cardID) return 'No existe ningún carrito con ese ID'

            return cardID

        } catch (error) {

            throw new Error("Not found");
        }

    }

    addProductToCart = async (cid, product) => {        

        try {

            const cartsDataBase = await this.readFile()

            const cardID = cartsDataBase.find(cart => cart.id === parseInt(cid))

            if (!cardID) return 'No existe ningún carrito con ese ID'

            const productIn = cardID.findIndex(prodIn => prodIn.parseInt(product) === parseInt(pid))

            if (!productIn) cart.product.push(product)

            console.log(cardID)
        
            return cardID

        } catch (error) {

            throw new Error("Not found");
        }

    }

}

