import React from "react";
import "./QuizDetail.css";

const QuizDetail = () => {
  const [quizesarr, setQuizarr] = React.useState([]);
  const [limit , setLimit] = React.useState(0)
  const [currentQuiz, setCurrentQuiz] = React.useState({});
  const [quizes, setQuizes] = React.useState([
    {
      id: 1,
      question: "this is question 1",
      options: [
        { option: "option1", answer: true, choose: false },
        { option: "option2", answer: false, choose: false },
      ],
    },
    {
      id: 2,
      question: "this is question 2",
      options: [
        { option: "optionc1", answer: true, choose: false },
        { option: "optionc2", answer: false, choose: false },
      ],
    },
    {
      id: 3,
      question: "this is question 3",
      options: [
        { option: "optiond", answer: true, choose: false },
        { option: "optiond2", answer: false, choose: false },
      ],
    },
    {
      id: 4,
      question: "this is question 4",
      options: [
        { option: "optionddd", answer: true, choose: false },
        { option: "optiondddd", answer: false, choose: false },
      ],
    },
  ]);
  console.log(quizes);

  const handleSelectQuiz = (id) => {
    if (id !== "") {
      let quiz = quizes.find((item) => item.id === id);
      if (quiz) {
        setCurrentQuiz(quiz);
        console.log(quiz, "ddd");
      }
    }
  };

  const handleConfirm = (id) => {
    let newQuiz = quizes.filter((item) => item.id !== id);
    console.log(newQuiz);
  };

  const handleOpionChange = (index) => {
    let data = currentQuiz.options;
    data.map((res, ind) => {
      if (index === ind) {
        res.choose = true;
      } else {
        res.choose = false;
      }
    });
    let newObj = { ...currentQuiz, options: data };
    setCurrentQuiz(newObj);
    console.log(newObj);
    console.log(quizes);
  };

  React.useEffect(() => {
    if (quizes.length !== 0) {
      setQuizarr(quizes);
      setCurrentQuiz(quizes[0]);
    }
  }, []);
  return (
    <div class="container-fluid mt-3" style={{ height: "80vh" }}>
      <div class="row">
        <div className=" col-md-12 mb-2">
          <div className="card p-3">dd</div>
        </div>
        <div class="col-md-6 mt-3">
          {quizes?.slice(limit, limit+1)?.map((item, index) => {
            return (
              <div class="card p-2 mb-1">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                  <div class="py-2 h5">
                    <b>សំណួរ : {item.question} </b>
                  </div>
                  <div
                    class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                    id="options"
                  >
                    {item?.options?.map((op, index) => (
                      <label className="options">
                        {op.option}
                        <input
                          type="radio"
                          name="radio"
                          value={item?.options[index]?.choose}
                          onChange={() => handleOpionChange(index)}
                        />{" "}
                        <span class="checkmark"></span>{" "}
                      </label>
                    ))}
                  </div>
                </div>
                <div class="d-flex align-items-center pt-3">
                  <div id="prev"></div>
                  <div class="ml-auto mr-sm-5">
                    <button
                      onClick={() => handleConfirm(currentQuiz.id)}
                      class="btn btn-success rounded"
                    >
                      សំណួរបន្ទប់
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="col-md-4 mb-1 mt-3">
          <div class="p-3 mb-1">
            {quizes?.map((item, index) => {
              let isAnswered = item.options.find(
                (item) => item.choose === true
              );
              let btn_class = isAnswered
                ? "btn-success"
                : "btn-outline-success";
              return (
                <button
                  class={`btn ${btn_class} rounded m-1`}
                  style={{ maxWidth: "60px" }}
                  onClick={() => handleSelectQuiz(item.id)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
