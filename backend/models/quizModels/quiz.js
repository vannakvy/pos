import mongoose from 'mongoose' 

const quizeSchema = mongoose.Schema({
    name:String,
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    category:String,
    courseImage:String,
    duration:Number,
    questions:[
        {
            question:String,
            answers:[{
                    option:String,
                    correct:Boolean,
                }],}
    ]
},{
    timestamps:true
})
const Quiz = mongoose.model("Quiz",quizeSchema);
export default Quiz;





