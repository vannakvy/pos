import mongoose from "mongoose";

const priceSchema = mongoose.Schema(
  {
    product: { type: mongoose.Schema.ObjectId, required: true, ref: "Product" },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    price: {
      type: Number,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const Price = mongoose.model("Price", priceSchema);

export default Price;
