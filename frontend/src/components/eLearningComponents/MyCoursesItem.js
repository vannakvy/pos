import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';
import Load from '../../components/eLearningComponents/Watch';
import ProfileImg from '../../img/img.jpg';

const MyCoursesItem = ({ enroll }) => {
 const { userInfo } = useSelector((state) => state.userLogin);
 const style = {
  text: {
   opacity: 0.5,
   color: '#fff',
  },
  head: {
   opacity: 1,
   color: '#fff',
   fontWeight: 700,
  },
 };
 return (
  <>
   <div className="py-5 px-1 bg-light">
    <img
     className="rounded-circle d-block"
     style={{
      height: '100px',
      width: '100px',
      margin: '0 auto',
      objectFit: 'cover',
     }}
     src={(userInfo && userInfo.profile) || ProfileImg}
     alt=""
    />

    <h5 style={{ opacity: 0.8 }} className="ubuntu text-center pt-3">
     Jrnn21
    </h5>
    <h5 className="text-center ubuntu" style={{ opacity: 0.3 }}>
     chamroeuncl22@gmail.com
    </h5>
    <h5 className="text-light text-center kh" style={{ opacity: 0.3 }}>
     សិស្ស
    </h5>
   </div>
   <div className="mt-2">
    <h5 className="kh text-center text-info">លទ្ធផលការសិក្សា</h5>
    <Chart
     width={'100%'}
     background={'black'}
     height={'250px'}
     chartType="PieChart"
     loader={
      <div className="text-center" style={{ padding: '130px 0' }}>
       <Load color="#282c34" type="Watch" width={40} height={40} />
      </div>
     }
     data={[
      ['Task', 'Hours per Day'],
      ['Finished', enroll.progressBar],
      ['Not yet', 100 - enroll.progressBar],
     ]}
     options={{
      // Just add this option
      is3D: true,
     }}
     rootProps={{ 'data-testid': '2' }}
    />
   </div>
  </>
 );
};

export default MyCoursesItem;
