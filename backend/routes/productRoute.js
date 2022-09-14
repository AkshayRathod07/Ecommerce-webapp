const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductByID } = require('../controllers/productControllers');
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct)
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductByID)


module.exports = router