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
  return (
    <div className="ebooCourseScreen">
      <div className="row">
        {/* sidebar  */}
        <div className="col-md-2">
          <Link to="/ebook" className="btn btn-info m-1 rounded">
            <FaArrowLeft className="pr-1" /> Home ||{" "}
            <span className="text-warning">{param.lang}</span>
          </Link>

          <ul className="list-group list-group-flush">
            {loading ? (
              <Loader hg={50} wd={50} />
            ) : (
              course &&
              course.map((content) => (
                <li
                  onClick={() => dispatch(getDetailByContentId(content._id))}
                  key={content._id}
                  className="list-group-item ebooCourseScreen_list"
                >
                  {content.title}
                </li>
              ))
            )}
          </ul>
        </div>
        {/* main  */}
        <div className="col-md-8">
          {loading ? (
            <Loader hg={100} wd={100} />
          ) : (
            detailBycontents &&
            detailBycontents.details &&
            detailBycontents.details.map((detail) => (
              <>
                <div className="detail_contents card card-body mb-2">
                  <h5>{detail.title}</h5>
                  <div className="p-2">{ReactHtmlParser(detail.contents)}</div>
                </div>
              </>
            ))
          )}
        </div>
        <div className="col-md-2 mt-2">
          <h5>Author : Vannak Vy</h5>
          <h6>Web Developer</h6>
          <h6>Programming Researcher</h6>
        </div>
      </div>
    </div>
  );
};

export default EbookCourseScreen;
