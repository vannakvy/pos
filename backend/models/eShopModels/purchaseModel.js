import mongoose from 'mongoose'


const PuchaseModel = mongoose.Schema({
    puchaseItems: [
        {
            qty: { type: Number, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    totalAmount: {
        type: String,
        required: true,
        defalut: 0
    },
    totalQty: {
        type: String,
        required: true,
        defalut: 0
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

}, {
    timestamps: true
})

const Purchase = mongoose.model('Purchase', PuchaseModel);

export default Purchase;