import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Table } from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/eShopComponents/Loader";
import Paginate from "../../components/eShopComponents/Paginate";
import { useDispatch, useSelector } from "react-redux";
import {createQuiz,listAllQuizes,updateQuiz,deleteQuiz} from '../../actions/quizActions/quiz.js'

const Quiz = ({ history, match }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [update, setUpdate] = useState(false);
  const [proId, setProId] = useState("");


  // quizLists: quizListReducers,
  // quizDelete: quizDeleteReducer,
  // quizCreate: quizCreateReducer,
  // quizUpdate: quizUpdateReducer,
  
  const quizeLists = useSelector((state) => state.quizLists);
  const { loading, error, quizes } = quizeLists;

  const quizCreate = useSelector((state) => state.quizCreate);
  const quizUpdate = useSelector((state) => state.quizUpdate);
  const quizDelete = useSelector((state) => state.quizDelete);

  const clearInput = () => {
    setName("");
    setDuration("");
    setCategory("");
    setProId("")
  };

  const handleSubmitHandler = (e)=>{
  e.preventDefault();
  if(proId===""){
    dispatch(createQuiz(name,category, duration))
  }else{
    dispatch(updateQuiz(proId,name,category, duration))
    }
  clearInput()
  }


useEffect(()=>{
  dispatch(listAllQuizes())
},[quizCreate,quizUpdate,quizDelete])
  return (
    <div className="addProductScreen">
      <div className=" card card-body m-2 p-3">
        <Form onSubmit={handleSubmitHandler}>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              ឈ្មោះ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="text"
                placeholder="ឈ្មោះលំហាត់"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              រយះពេល
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="number"
                placeholder="រយះពេល"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Col>

          </Form.Group>
          <Form.Group as={Row}>
       
            <Form.Label column sm={1}>
              ប្រភេទ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="ប្រភេទ"
                size="sm"
                custom
              >
                <option>Microcontrollers</option>
                <option>Motors</option>
                <option>Sensor</option>
                <option>Computers</option>
                <option>RC Cars</option>
              </Form.Control>
            </Col>
            <Col sm={1}></Col>
            <Col sm={3}>
              {proId ? (
                <>
                  <Button
                    type="submit"
                    size="sm"
                    variant="info"
                    className="rounded"
                  >
                    កែប្រែលំហាត់
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="danger"
                    className="rounded ml-1"
                    onClick={() => setProId(false)}
                  >
                    លុបការកែប្រែ
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  size="sm"
                  variant="info"
                  className="rounded"
                >
                  បញ្ចូលលំហាត់
                </Button>
              )}
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="card mt-2 ">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr className="bg-info text-light">
             
              <th>លេខរៀង</th>
              <th>ឈ្មោះលំហាត់</th>
              <th>ប្រភេទ</th>
              <th>ថ្ងៃបង្កើត</th>
              <th style={{textAlign:"center"}}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader wh={50} hg={50} />
            ) : (
              <>
                {quizes &&
                  quizes.map((quiz,index) => (
                    <tr key={quiz._id}>
                      <td>{index +1}</td>
                      <td>{quiz.name}</td>
                      <td>{quiz.category}</td>
                      <td>{quiz.duration}</td>
                      <td style={{textAlign:"center"}}>
                        <i
                          className="fas fa-edit text-info"
                          onClick={() => {
                            setProId(quiz._id);
                            setName(quiz.name);
                            setCategory(quiz.category);
                            setDuration(quiz.duration)
                            setUpdate(true);
                          }}
                        ></i>
                        <i
                          className="fas fa-trash ml-3 text-danger"
                          onClick={() => {
                           let yes = window.confirm("are you sure")
                           if(yes){
                           dispatch(deleteQuiz(quiz._id))
                           }
                          }  }
                        ></i>
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </Table>
        {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
      </div>
    </div>
  );
};

export default Quiz;
