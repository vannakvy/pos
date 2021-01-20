import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLanguages } from "../../actions/eBookActions/eBookCourseActions";
import Sidebar from "../../components/eBookComponents/Sidebar";
const EbookHomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <div className="ebookHomeScreen">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="section1 text-center mt-4 mb-3">
            <iframe
              width="400"
              height="230"
              src="https://www.youtube.com/embed/f2ds6Gr4C6g"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="section2">
            <div className="row align-items-center">
              <div className="col-md-6 mt-4 text-center">
                <img
                  style={{ width: "350px" }}
                  src="https://www.codebelgium.com/assets/site/postsmedia/best-programming-languages.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 mt-3">
                <div className="content w-75">
                  <h4>Cambodia Coding </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo laboriosam eos reiciendis, itaque quidem hic blanditiis
                    odio. tempore molestiae corrupti totam reprehenderit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookHomeScreen;
