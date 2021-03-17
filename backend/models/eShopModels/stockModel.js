import mongoose from 'mongoose'


const stockSchema = mongoose.Schema({
    product:{type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    },
    salePrice: [
        {
        type: Number,
        }
    ],
    sales: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Sale'}
    ],     
    purchase: [
        {type: mongoose.Schema.Types.ObjectId,
        ref:'Purchase'}
    ]
},{
    timestamps:true
})