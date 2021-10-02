import mongoose from 'mongoose'

const adjustSchema = mongoose.Schema({
    adjustStockType:{
        type:Boolean,
        default:false
    },
    remark:String,
    newStock:{
        type:Number,
        default:0
    },
    actualStock:{
        type:Number,
        default:0,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
},{timestamps:true});
const AdjustStock = mongoose.model('AdjustStock', adjustSchema);
export default AdjustStock;

