import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { MdDeleteSweep } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MyCourseItem = ({ enroll, deleteEnrollHandler = false }) => {
 const history = useHistory();
 const courseDetailLink = (enroll) => {
  setTimeout(function () {
   history.push(
    `/elearning/enroll/${enroll._id}/courses/${enroll.courseId._id}`
   );
  }, 300);
 };
 return (
  <Card className="mx-md-1 mx-lg-0 mx-xl-2 shadow round my-3 courseItem">
   <CardActionArea
    className="position-relative"
    onClick={() => courseDetailLink(enroll)}
   >
    <img
     className="position-absolute"
     style={{
      minWidth: 300,
      maxWidth: 350,
      opacity: `${enroll.progressBar === 100 ? '0.1' : '1'}`,
     }}
     src={enroll.courseId.imgUrl}
     alt=""
    />

    <div className="d-flex justify-content-between" style={{ height: 170 }}>
     <div className="d-flex">
      <div className="p-2 kh" style={{ fontWeight: 'bolder', zIndex: 1 }}>
       <div style={{ width: '70px', zIndex: 2 }}>
        <CircularProgressbar
         value={enroll.progressBar}
         text={`${enroll.progressBar}%`}
         circleRatio={0.75}
         strokeWidth={4}
         styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: 'butt',
          trailColor: '#eee',
          textColor: '#fa6c7e',
          pathColor: '#fa6c7e',
         })}
        />
       </div>
      </div>

      <div className="p-2" style={{ zIndex: 1 }}>
       <h5>{enroll.courseId.name}</h5>
       <small className="text-info">{enroll.courseId.courseType}</small>
      </div>
     </div>
     {deleteEnrollHandler && deleteEnrollHandler ? (
      <div style={{ zIndex: 1 }}>
       <MdDeleteSweep
        onClick={() => deleteEnrollHandler(enroll._id)}
        className="m-2 text-light t_grediantHover"
        style={{ fontSize: '30px' }}
       />
      </div>
     ) : null}
    </div>
   </CardActionArea>
  </Card>
 );
};

export default MyCourseItem;
