import mongoose from 'mongoose'


const categorySchema = mongoose.Schema({
    category:String,
    remark:String
},{timestamps:true});

const Category = mongoose.model('category', categorySchema);
export default Category;