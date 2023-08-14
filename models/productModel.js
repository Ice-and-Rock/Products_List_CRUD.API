// Import the Mongoose library
    // This allows you to work with MongoDB with more structure
const mongoose = require('mongoose')

// The following Schema is designed to pass information to MongoDB in a set structure
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter the product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model('Product', productSchema);

// Export this particular schema modle as PRoduct
module.exports = Product