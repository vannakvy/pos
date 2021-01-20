import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { getLanguages } from "../../actions/eBookActions/eBookCourseActions";
import Loader from "../Loader";

function Sidebar() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.courses);
  const { courses, loading } = lang;

  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <div className="sidebar">
      {loading ? (
        <Loader wd={80} hg={80} />
      ) : (
        <>
          <ul className="list-group list-group-flush">
            {courses &&
              courses.map((course) => (
                <>
                  <Link
                    to={`/ebook/${course.title}`}
                    key={course._id}
                    className="link"
                  >
                    <li className="list-group-item courseList">
                      {course.title}
                    </li>
                  </Link>
                </>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sidebar;
