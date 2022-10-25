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
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    // console.log(course);
    const { _id, thumbnail_url, title, advisor, details } = course;
    return (

        <MDBCol sm='6'>
            <MDBCard className='border-0 shadow-sm'>
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold'>{title}</MDBCardTitle>
                    <img className='w-100 rounded-3' src={thumbnail_url} alt="Courses" />
                    <MDBCardText>
                        {
                            details.length > 120 ?
                                <>{details.slice(0, 250) + '...'}</>
                                :
                                details
                        }
                    </MDBCardText>
                    <p className='mt-3 mb-3 text-danger'>Course Duration: {advisor?.course_duration}</p>
                    <MDBBtn color='success'><Link className='text-decoration-none text-white' to={`/courses/${_id}`}>ShowDetails</Link></MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default CourseSummary;