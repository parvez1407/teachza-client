import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    // console.log(course);
    const { _id, thumbnail_url, title, advisor, details } = course;
    return (

        <MDBCol sm='6' data-aos="fade-up"
            data-aos-duration="1000">
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
                    <button color='success' className='mb-4 w-100 bg-success rounded-2 p-2 text-white border-0'><Link className='text-decoration-none text-white' to={`/courses/${_id}`}>ShowDetails</Link></button>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default CourseSummary;