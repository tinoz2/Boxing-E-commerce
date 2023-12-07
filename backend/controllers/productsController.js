import Product from '../schemas/product.js'
import newProduct from '../schemas/product.js'

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await newProduct.find();
        res.json(products);
    }
    catch (err) {
        console.log(err);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(product);
    } catch (err) {
        console.log(err);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.json(product);
    } catch (err) {
        console.log(err);
    }
}

export { addProduct, getProducts, updateProduct, deleteProduct };