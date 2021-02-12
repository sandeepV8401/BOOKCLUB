import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const  price = req.body.price;
    const name = req.body.name;
    const countInStock  = req.body;
    const image = "Image";
    const rating = 3.5;
    const numReviews = 7;
    const newBook = new Product({
      name,
      image,
      price,
      countInStock,
      rating,
      numReviews,
    });
    const createdBook = await newBook.save();

    res.send(createdBook);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createProducts = await Product.insertMany(data.products);
    res.send({ createProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
export default productRouter;
