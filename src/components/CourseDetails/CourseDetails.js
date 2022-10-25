import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, image_url, details, advisor, total_seat } = courseDetails;
    return (
        <div>
            <MDBCard>
                <MDBCardHeader><h3 className='text-success'>{title}</h3></MDBCardHeader>
                <MDBCardBody>
                    <img className='w-100 rounded-1' src={image_url} alt="" />
                    <div className='d-flex justify-content-between'>
                        <MDBCardTitle className='mb-2 mt-2'>Advisor: {advisor.name}</MDBCardTitle>
                        <div className='d-flex'>
                            <p className='me-4 text-success'>Total Seat: {total_seat}</p>
                            <p className='me-4 text-success'>Course Duration: {advisor.course_duration}</p>
                        </div>
                    </div>
                    <MDBCardText>{details}</MDBCardText>
                    <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default CourseDetails;