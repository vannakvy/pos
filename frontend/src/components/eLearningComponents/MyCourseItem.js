import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { MdDeleteSweep } from 'react-icons/md';
import Progress from 'react-circle-progress-bar';

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
       <Progress
        style={{ width: '70px' }}
        ballStrokeWidth={16}
        gradient={[
         { stop: 0.5, color: '#fa6c7e' },
         { stop: 1, color: '#5eaefd' },
        ]}
        subtitle={'រៀនបាន'}
        progress={enroll.progressBar}
       />
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
