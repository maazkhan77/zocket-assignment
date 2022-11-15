import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        }, 
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;