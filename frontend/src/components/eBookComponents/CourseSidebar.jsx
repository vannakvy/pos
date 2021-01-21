import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Loader from "../Loader";

function CourseSidebar({ loading, courses, action }) {
  return (
    <div className="sidebar ml-1 mt-1">
      {loading ? (
        <Loader wd={80} hg={80} />
      ) : (
        <>
          <ul className="list-group list-group-flush">
            {courses &&
              courses.map((course) => (
                <>
                  <Link
                    onClick={() => action(course._id)}
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

export default CourseSidebar;
