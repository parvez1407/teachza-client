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
    console.log(course);
    const { _id, thumbnail_url, title, advisor, details } = course;
    return (

        <MDBCol sm='6'>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold'>{title}</MDBCardTitle>
                    <img className='w-100' src={thumbnail_url} alt="Courses" />
                    <MDBCardText>
                        {
                            details.length > 120 ?
                                <>{details.slice(0, 250) + '...'}</>
                                :
                                details
                        }
                    </MDBCardText>
                    <p className='mt-3 mb-3 text-danger'>Course Duration: {advisor?.course_duration}</p>
                    <MDBBtn color='success'><Link className='text-white' to={`/course/${_id}`}>ShowDetails</Link></MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default CourseSummary;