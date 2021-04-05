import mongoose from "mongoose";

// product: '60233c2ad22c6f2b58326288',
// [0]     qty: '3',
// [0]     price: '6',
// [0]     salePrice: 605698e69ac58931dcfb061c,
// [0]     supplier: '6023b3898fc294078874d41d',
// [0]     shippingCost: '4'

const PuchaseModel = mongoose.Schema(
  {
    purchaseItems: [
      {
        unit: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        salePrice: {
          type: mongoose.Schema.ObjectId,
          required: true,
          ref: "Price",
        },
        shippingCost: { type: Number, required: true },
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
    ],
    totalAmount: {
      type: String,
      required: true,
      defalut: 0,
    },
    totalQty: {
      type: String,
      required: true,
      defalut: 0,
    },
    purchaseAt: { type: Date, required: true, default: new Date() },
  },
  {
    timestamps: true,
  }
);

const Purchase = mongoose.model("Puchase", PuchaseModel);

export default Purchase;
