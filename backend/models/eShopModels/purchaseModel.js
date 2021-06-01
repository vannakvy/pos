import mongoose from "mongoose";

const PuchaseModel = mongoose.Schema(
  {
    unit: { type: String, required: true, default: 0 },
    qty: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    shippingCost: { type: Number, required: true, default: 0 },
    purchaseAt: { type: Date, required: true, default: new Date() },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Supplier",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },

  {
    timestamps: true,
  }
);

const Purchase = mongoose.model("Puchase", PuchaseModel);

export default Purchase;
