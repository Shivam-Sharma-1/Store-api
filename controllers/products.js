const Products = require("../models/product");

const getAllProductsStatic = async (req, res) => {
	const products = Products.find({});
	res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = async (req, res) => {
	res.status(200).json({ msg: "Products route" });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic
};
