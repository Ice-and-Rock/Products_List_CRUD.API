const express = require("express");

// Added CORS security protocol middlewear
const cors = require('cors');

const mongoose = require("mongoose");
const app = express();
// Use the cors middleware
app.use(cors());
const Product = require("./models/productModel.js");

// FIND the link below to MongoDB
// https://cloud.mongodb.com/v2/646e5f28d4405b0df22ba416#/metrics/replicaSet/646e5f92c82c195be4d5727d/explorer/node-API/products/find

// PICTURES
// https://pixels.com

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("hello Blog, my name is Nick");
});

// GET all products
app.get("/products/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    // Catch a 500 error report
    res.status(500).json({ message: error.message });
  }
});

// GET a product by id
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    // Catch a 500 error report
    res.status(500).json({ message: error.message });
  }
});

// POST a new product
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    // Catch a 500 error report
    res.status(500).json({ message: error.message });
  }
});

// PUT update to a product by id
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    // Return the updated data
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    // Catch a 500 error report
    res.status(500).json({ message: error.message });
  }
});

// DELTE a product by id
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productToDelete = await Product.findByIdAndDelete(id);
    if (!productToDelete) {
      return res
        .status(404)
        .json({ message: `cannot find user with id: ${id}` });
    }
    res.status(200).json(productToDelete);
    console.log(
      productToDelete.name + " " + "has been deleted - no turning back now!"
    );
  } catch (error) {
    // Catch a 500 error report
    res.status(500).json({ message: error.message });
  }
});

// CONSOLE some information to ensure we are connected
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:Passw0rd1@cluster0.j6xtve8.mongodb.net/node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    // First message to make sure we connect
    app.listen(3004, () => {
      console.log("Node API app is running on port 3004");
      // second message to confirm the port
    });
  })
  .catch((error) => {
    console.log(error);
  });
