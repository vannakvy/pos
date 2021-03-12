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
    TotalAmount: {
        type: String,
        required: true,
        defalut: 0
    },
    TotalQty: {
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

const Puchase = mongoose.model('Puchase', PuchaseModel);

export default Puchase;