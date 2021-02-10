import mongoose from 'mongoose'


const PuchaseModel = mongoose.Schema({
    product: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    description: {
        type: String
    },
    price: {
        type: String,
    },
    purchaseAt: {
        type: Date,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Supplier'
    },
    arrivedAt: {
        Type: Date,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },

}, {
    timestamps: true
})

const Puchase = mongoose.model('Puchase', PuchaseModel);
export default Puchase;