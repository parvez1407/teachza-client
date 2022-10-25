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


const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <h3 className='text-center text-success fw-bold'>All Courses Of {categoryCourses[0].category_name}</h3>
            <MDBRow style={{ rowGap: 20 }}>
                {
                    categoryCourses.map(course => <CourseSummary
                        key={course._id}
                        course={course}
                    ></CourseSummary>)
                }
            </MDBRow>
        </div>
    );
};

export default Category;