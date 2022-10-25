import React from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Common/CourseSummary/CourseSummary';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2 className='text-success text-center mt-4 mb-4 fw-bold'>Our Courses at a Glance</h2>
            <MDBRow style={{ rowGap: 20 }}>
                {
                    courses.map(course => <CourseSummary
                        key={course._id}
                        course={course}
                    ></CourseSummary>)
                }
            </MDBRow>
        </div>
    );
};

export default Courses;