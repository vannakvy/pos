import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({
 pages,
 page,
 isAdmin = false,
 keyword = '',
 courseType = 'AllCourses',
 locate = '',
}) => {
 return (
  pages > 1 && (
   <Pagination>
    {[...Array(pages).keys()].map((x) => (
     <LinkContainer
      key={x + 1}
      to={
       locate === 'users'
        ? ''
        : locate === 'elearnDash'
        ? `/elearning/search/page/${x + 1}?keyword=${keyword}`
        : !isAdmin
        ? keyword
          ? `/elearning/courses/search/page/${x + 1}?keyword=${keyword}`
          : courseType !== 'AllCourses'
          ? `/elearning/courses/page/${x + 1}?courseType=${courseType}`
          : `/elearning/courses/page/${x + 1}`
        : keyword
        ? `/adminElearn/courses/search/page/${x + 1}?keyword=${keyword}`
        : courseType !== 'AllCourses'
        ? `/adminElearn/courses/page/${x + 1}?courseType=${courseType}`
        : `/adminElearn/courses/page/${x + 1}`
      }
     >
      <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
     </LinkContainer>
    ))}
   </Pagination>
  )
 );
};

export default Paginate;
