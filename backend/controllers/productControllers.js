const Product = require('../models/productModal');

// create product  -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}
// get all products
exports.getAllProducts = async (req, res) => {

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

// update product --admin
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        product,
    });

}

// delete product --admin only
exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
}

// get product by ID 
exports.getProductByID = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    // if (!product) {
    //     return next(new ErrorHander("Product not found", 404));
    // }

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found",

        })
    }

    res.status(200).json({
        success: true,
        product,
    });

}