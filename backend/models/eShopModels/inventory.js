// { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },

import mongoose from 'mongoose'
import Paginate from 'mongoose-paginate-v2';

const inventorySchema = mongoose.Schema({
    sku:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    productName:String,
    instock:Number,
    remark:String,
    retailPrice:Number,
},{timestamps:true});

inventorySchema.plugin(Paginate)
const Inventory = mongoose.model("Inventory",inventorySchema);
export default Inventory;