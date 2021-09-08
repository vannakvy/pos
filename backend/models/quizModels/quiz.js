import mongoose from 'mongoose' 

const quizeSchema = mongoose.Schema({
    title:String,
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    courseTitle:String,
    duration:Number,
    questions:[
        {
            question:String,
            options:[{
                    option:String,
                    answer:Boolean,
                }],}
    ]
},{
    timestamps:true
})
const Quiz = mongoose.model("Quiz",quizeSchema);
export default Quiz;





