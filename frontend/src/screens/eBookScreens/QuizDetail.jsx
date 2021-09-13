import React from "react";
import Timer from "../../components/Timer";
import "./QuizDetail.css";

const QuizDetail = () => {
  const [limit, setLimit] = React.useState(0);
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

  const handleSelectQuiz = (id) => {
    // if (id !== "") {
    //   let quiz = quizes.find((item) => item.id === id);
    //   if (quiz) {
    //     setCurrentQuiz(quiz);
    //     console.log(quiz, "ddd");
    //   }
    // }
  };

  // const handleConfirm = (id) => {
  //   let newQuiz = quizes.filter((item) => item.id !== id);
  //   console.log(newQuiz);
  // };

  const handleOpionChange = (index) => {
    let data = quizes[limit].options;
    data.map((res, ind) => {
      if (index === ind) {
        res.choose = true;
      } else {
        res.choose = false;
      }
    });
    let newObj = { ...data, options: data };
  };

  const handleNext = (index) => {
    setLimit(index);
    console.log(quizes);
  };
  const handleSubmit = () => {
    console.log(quizes, "sss");
  };




  return (
    <div class="container-fluid mt-3 mb-1" style={{ minHeight: "80vh" }}>
      <div class="row">
        <div class="col-md-6 mt-3">
          {limit === quizes.length ? (
            <div className="" style={{ minHeight: "40vh" }}>
              <p> ! ចាប់ផ្តើមម្តងទៀត​ </p>
              <button className="btn btn-outline-success m-2 rounded">ចាប់ផ្តើមម្តងទៀត</button>
              <button className="btn btn-outline-info m-2 rounded">បញ្ចប់ការតេស្ត</button>
            </div>
          ) : (
            <>
              {quizes?.slice(limit, limit + 1)?.map((item, ins) => {
                return (
                  <div class="card p-2 mb-1" style={{ minHeight: "35vh" }}>
                    <div class="question ml-sm-5 pl-sm-5 pt-2">
                      <div class="py-2 h5">
                        <b>សំណួរ : {item.question} </b>
                      </div>
                      <div
                        class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                        id="options"
                      >
                        {item?.options?.map((op, i) => (
                          <label className="options">
                            {op.option}
                            <input
                              type="radio"
                              name="radio"
                              value={item?.options[i]?.choose}
                              onChange={() => handleOpionChange(i)}
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
                          // disabled={limit===quizes.length -1}
                          onClick={() => handleNext(limit + 1)}
                          class="btn btn-success rounded"
                        >
                          សំណួរបន្ទប់
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div class="col-md-4 mb-1 mt-3">
          <div className=""><Timer/>
          </div>
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
                  onClick={() => handleNext(index)}
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
