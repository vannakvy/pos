import asyncHandler from 'express-async-handler';
import Quiz from '../../models/quizModels/quiz'; 

//@Desc add new quiz 
//@Access admin

const AddQuiz = asyncHandler(async (req, res) => {
    const {
        title,
        course,
        courseTitle,
        duration
    } = req.body;
  
    try {
        const quiz = new Quiz({
        title,
        course,
        courseTitle,
        duration
        });

        if(!quiz){
            throw new Error("មិនអាចបង្កើតបានទេ");
        }

        const createdQuiz = await Quiz.save();
        res.status(201).json(createdQuiz);
    } catch (error) {
        throw new Error("មិនអាចបង្កើតបានទេ");
    }

  });

  //@Desc update quiz 
  //@Access admin
  const updateQuiz = asyncHandler(async (req, res) => {
    const {
        title,
        course,
        duration,
        courseTitle,
        quizId
    } = req.body;
  
    try {
const update = await Quiz.findByIdAndUpdate(quizId,{
    title:title,
    course:course,
    duration:duration,
    courseTitle:courseTitle,
});
        if(!update){
            throw new Error("មិនអាចកែបានទេ");
        }

      
        res.status(201).json(update);
    } catch (error) {
        throw new Error("មិនអាចកែបានទេ");
    }

  });

//@Desc delete quiz
//@Access admin
  const deleteQuiz = asyncHandler(async (req, res) => {
    const {
        quizId
    } = req.body;
  
    try {
    const deleted = await Quiz.findByIdAndDelete(quizId);
        if(!deleted){
            throw new Error("មិនអាចលុបបានទេ");
        }
        res.status(201).json(deleted);
    } catch (error) {
        throw new Error("មិនអាចលុបបានទេ");
    }
  });

  //@Desc get all quiz
//@Access protected || admin
const getAllQuizes = asyncHandler(async (req, res) => {
    const quizes = await Quiz.find({});
        res.status(201).json(quizes);
  });


//@Desc get quiz by id
//@Access protected
const getQuizById = asyncHandler(async (req, res) => {
    const quize = await Quiz.findById(req.quizId);
        res.status(201).json(quize);
  });


//@Desc get quiz by course Id 
//@Access protected
const getQuizByCourseId = asyncHandler(async (req, res) => {
    const quizes = await Quiz.find({course:req.courseId});
        res.status(201).json(quizes);
  });


  //@Desc add questions to quiz 
  //@Access admin 

  const addQuestion = asyncHandler(async (req, res) => {
    const {
        quizId,
        questions,
    } = req.body;
    try {
        const addQuestion = await Quiz.findByIdAndUpdate(
            quizId,
            { $push: { questions: questions } }
          );

          if (!addQuestion) {
            throw new Error("មិនបាន បង្កើតបានទេ")
          }
       
        res.status(201).json(addQuestion);
    } catch (error) {
        throw new Error("មិនអាចបង្កើតបានទេ");
    }
  });

    //@Desc update questions in the quiz
  //@Access admin 

  const updateQuestion = asyncHandler(async (req, res) => {
    const {
        quizId,
        questionId,
        options,
        question
    } = req.body;
    try {
        const addQuestion =  await Quiz.findOneAndUpdate(
            { _id: quizId, "questions._id": questionId },
            {
              $set: {
                // midExamDetails.$.Marks
                "questions.$.question": question,
                "questions.$.options": options,
              },
            }
          );
  
          if (!addQuestion) {
            throw new Error("មិនបាន បង្កើតបានទេ")
          }
        res.status(201).json(addQuestion);
    } catch (error) {
        throw new Error("មិនអាចបង្កើតបានទេ");
    }
  });


    //@Desc delete questions in the quiz
    //@Access admin 
//   const delete = asyncHandler(async (req, res) => {
//     const {
//         quizId,
//         questionId,
//         options,
//         question
//     } = req.body;

//     try {
//         const addQuestion =  await Quiz.findOneAndUpdate(
//             { _id: quizId, "questions._id": questionId },
//             {
//               $set: {
//                 // midExamDetails.$.Marks
//                 "questions.$.question": question,
//                 "questions.$.options": options,
//               },
//             }
//           );

//           if (!addQuestion) {
//             throw new Error("មិនបាន បង្កើតបានទេ")
//           }
//         res.status(201).json(addQuestion);
//     } catch (error) {
//         throw new Error("មិនអាចបង្កើតបានទេ");
//     }
//   });




