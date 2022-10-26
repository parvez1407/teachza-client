import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdb-react-ui-kit';
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14, 10]
};

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, image_url, details, advisor, total_seat, _id } = courseDetails;
    return (
        <div>
            <MDBCard ref={ref}>
                <MDBCardHeader className='d-flex justify-content-between'>
                    <h3 className='text-success'>{title}</h3>
                    <>
                        <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
                            {({ toPdf }) => <button onClick={toPdf} className='border-0 fw-bold'>Download<FaFileDownload className='fs-3 text-success' /></button>}
                        </Pdf>
                    </>

                </MDBCardHeader>
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
                    <button href='#' className='mb-4 bg-success rounded-2 p-2 text-white border-0'><Link className='text-decoration-none text-white' to={`/premium/${_id}`}>Get Premium Access</Link></button>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default CourseDetails;