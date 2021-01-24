import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./EbookCourseScreen.css";
import ReactHtmlParser from "react-html-parser";
import { FaArrowLeft } from "react-icons/fa";
import { getOneLanguage } from "../../actions/eBookActions/eBookCourseActions";
import { disconnect } from "mongoose";
import Loader from "../../components/Loader";
import { getDetailByContentId } from "../../actions/eBookActions/eBookDetailActions";
import CourseSidebar from "../../components/eBookComponents/CourseSidebar";
import { Button } from "react-bootstrap";

const EbookCourseScreen = () => {
  const param = useParams();
  const dispatch = useDispatch();
  // const { details, loading, error } = useSelector((state) => state.details);
  const { course, error } = useSelector((state) => state.course);
  const { detailBycontents, loading } = useSelector(
    (state) => state.detailByContentId
  );

  useEffect(() => {
    dispatch(getOneLanguage(param.lang));
  }, [dispatch]);
  const goToCourseDetail = (id) => {
    dispatch(getDetailByContentId(id));
  };
  return (
    <div className="ebooCourseScreen">
      <div className="row">
        {/* sidebar  */}
        <div className="col-md-3">
          <CourseSidebar
            loading={loading}
            courses={course}
            action={goToCourseDetail}
          />
        </div>
        {/* main  */}
        <div className="col-md-6">
          <Link to="/ebook" className="btn btn-info my-1 rounded">
            <FaArrowLeft className="pr-1" /> Home ||{" "}
            <span className="text-warning">{param.lang}</span>
          </Link>
          {loading ? (
            <Loader hg={100} wd={100} />
          ) : (
            detailBycontents &&
            detailBycontents.details &&
            detailBycontents.details.map((detail) => (
              <>
                <div className="detail_contents card card-body mb-2 ebooCourseScreen_img">
                  <h5>{detail.title}</h5>
                  <div className="p-2 ">{ReactHtmlParser(detail.contents)}</div>
                </div>
              </>
            ))
          )}
        </div>
        <div className="col-md-2 mt-3">
          <img
            className="img-fluid round"
            src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
            alt=""
          />
          <div className="p-3">
            <h5 className="text-light">Author : Vannak Vy</h5>
            <h6 className="my-2">Web Developer</h6>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel
              beatae ab sed quibusdam ea quod aut temporibus dolorum molestiae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookCourseScreen;
