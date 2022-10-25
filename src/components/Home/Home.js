import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Common/CourseSummary/CourseSummary';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='text-success text-center mt-4 fw-bold'>Our Courses at a Glance</h2>
            <MDBRow style={{ rowGap: 15 }}>
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

export default Home;