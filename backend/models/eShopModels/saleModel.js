import mongoose from 'mongoose'


const saleSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    price: {
        type: Number,
        required: true,
        default:0
    },
    amount :{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required:true,
        default: Date.now()
    },
    saleTo:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    }
},{
    timestamps: true
})

const Sale = mongoose.model('Sale',saleSchema);

export default Sale;