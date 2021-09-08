const questionSchema = mongoose.Schema({
    quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Quiz"
    },
    question:String,
    options:[{
        option:String,
        answer:Boolean,
    }],
},{timestamps:true});

const Question = mongoose.model("Question",questionSchema);
export default Question;