import mongoose from 'mongoose'


const PuchaseModel = mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Product'
    },
    description: {
        type: String
    },
    price: {
        type: String,
    },
    date: {
        type: String,
    },
    supplier:{
        type: String
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }, 
    arrived:{
        type: Boolean,
        required: true,
        default:false
    }

},{
    timestamps: true
})

const Puchase = mongoose.model('Puchase',PuchaseModel);
export default Puchase;