import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    client: {
      type: String,
    },
    invoiceID:{
      type:String,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: String,
    paymentMethod: {
      type: String,
    },

    taxPrice: {
      type: Number,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    remark:String,
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isCancel:{
      type:Boolean,
      default:false
    },
    cancelDate:Date,
    deliveredBy:String,
    deliveredAt: {
      type: Date,
    },
    clientTel:String,
    discount:{
      type:Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);



const Order = mongoose.model("Order", orderSchema);

export default Order;
