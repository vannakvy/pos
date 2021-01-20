import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  addLanguage,
  deleteLanguage,
  getLanguages,
  updateLanguage,
} from '../../actions/eBookActions/eBookCourseActions'
import Loader from "../../components/Loader";


const AddminCourseScreen = () => {
  const dispatch = useDispatch();
  const [upId, setUpId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { courses, loading, error } = useSelector((state) => state.courses);
  const languageCreate = useSelector((state) => state.languageCreate);
  const languageDelete = useSelector((state) => state.languageDelete);
  const languageUpdate = useSelector((state) => state.languageUpdate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && category !== 0 && upId === "") {
      dispatch(addLanguage(title, category));
    } else {
      dispatch(updateLanguage(upId, title, category));
    }
    setTitle("");
    setCategory("");
    setUpId("");
  };

  const deleteLang = (id) => {
    if (window.confirm("Are you sure to delete it")) {
      dispatch(deleteLanguage(id));
    }
  };

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch, languageCreate, languageDelete, languageUpdate]);

  return (
    <div className="course">
      <div className="container">
        <button
          className="btn btn-primary mb-2"
          type="button"
          data-toggle="collapse"
          data-target="#course"
          aria-expanded="false"
          aria-controls="course"
        >
          Create new Course
        </button>

        <div className="collapse mb-3 " id="course">
          <div className="container border">
            <form
              onSubmit={handleSubmit}
              className="form-row align-items-center"
            >
              <div className="form-group col-md-4 mt-3">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  placeholder="Enter the course name"
                />
              </div>
              <div className="form-group col-md-4 mt-3">
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  type="category"
                  className="form-control"
                  id="category"
                  value={category}
                  placeholder="Enter the category..."
                />
              </div>
              <div className="col-md-4">
                {upId ? (
                  <>
                    <button
                      type="submit"
                      className="btn btn-primary w-50"
                      data-toggle="collapse"
                      data-target="#course"
                      aria-expanded="true"
                      aria-controls="course"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning w-25 ml-2"
                      data-toggle="collapse"
                      data-target="#course"
                      aria-expanded="true"
                      aria-controls="course"
                      onClick={() => {
                        setUpId("");
                        setTitle("");
                        setCategory("");
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary w-50"
                    data-toggle="collapse"
                    data-target="#language"
                    aria-expanded="true"
                    aria-controls="language"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No#</th>
              <th scope="col">Course Title</th>
              <th scope="col">Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
              
          {loading ? <tr className="text-center"> <Loader wd={100} hg={100} /></tr> :<>
          {courses &&
              courses.map((course) => (
                <>
                  <tr key={course._id}>
                    <th scope="row">{course._id}</th>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                    <td>
                      <FaEdit
                        onClick={() => {
                          setTitle(course.title);
                          setCategory(course.category);
                          setUpId(course._id);
                        }}
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        data-toggle="collapse"
                        data-target="#course"
                        aria-expanded="true"
                        aria-controls="course"
                      />
                      <FaTrash
                        style={{ cursor: "pointer" }}
                        className="text-danger ml-2"
                        onClick={() => deleteLang(course._id)}
                      />
                    </td>
                  </tr>
                </>
              ))}
          </>}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddminCourseScreen;
