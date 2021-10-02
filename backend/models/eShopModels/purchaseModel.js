import mongoose from "mongoose";
import Paginate from 'mongoose-paginate-v2'

const PuchaseModel = mongoose.Schema(
  {
    // unit: { type: String, required: true, default: 0 },
    purchaseQty: { type: Number, required: true, default: 0 },
    purchasePrice: { type: Number, required: true, default: 0 },
    purchaseShippingPrice: { type: Number, required: true, default: 0 },
    purchaseDate: { type: Date, required: true, default: new Date() },
    supplier:{
        name:String,
        tel:String,
        address:String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    productName:String,
    category:String,
    remark:String,
  },
  {
    timestamps: true,
  }
);

PuchaseModel.plugin(Paginate)

const Purchase = mongoose.model("Puchase", PuchaseModel);

export default Purchase;
