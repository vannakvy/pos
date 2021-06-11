import mongoose from "mongoose";

const newStockSchema = mongoose.Schema(
  {
    stockQty: {
      type: Number,
      required: true,
      default: 0.0,
    },
    stockAmount: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const newStock = mongoose.model("newStock", newStockSchema);
