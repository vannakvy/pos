import mongoose from 'mongoose'


const PuchaseModel = mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Product'
    },
    supplier: {
        type: String,
        required: true
    },
    discount: {
        type: String,
    },
    date: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }, 

},{
    timestamps: true
})

const Puchase = mongoose.model('Puchase',PuchaseModel);
export default Puchase;