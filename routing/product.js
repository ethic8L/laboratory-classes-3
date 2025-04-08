const express = require("express");
const router = express.Router();

const { STATUS_CODE } = require("../constants/statusCode");


const productsSlice = {
  products: [],
  newestProduct: null,
};

const MENU_LINKS = [
  { path: "/", label: "Home" },
  { path: "/product", label: "Products" },
  { path: "/logout", label: "Logout" },
];


router.get("/add", (_req, res) => {
  res.render("add-product", {
    headTitle: "Add Product",
    path: "/product/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/product/add",
  });
});


router.post("/add", (req, res) => {
  const { name, description } = req.body;
  const newProduct = { name, description };

  productsSlice.newestProduct = newProduct;
  productsSlice.products.push(newProduct);

  res.status(STATUS_CODE.FOUND).redirect("/product/new");
});


router.get("/new", (_req, res) => {
  res.render("new-product", {
    headTitle: "New Product",
    path: "/product/new",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/product/new",
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;
