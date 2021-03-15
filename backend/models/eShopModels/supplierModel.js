import mongoose from 'mongoose'

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    address: String
}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)


export default Supplier;