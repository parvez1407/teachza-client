import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const course = useLoaderData();
    const handleCheckOut = () => {
        toast.success('Enroll Successfully! Hope You enjoy the Course')
    }
    return (
        <div>
            <h2 className='text-success text-center mb-4'>Check This Out...</h2>
            <Row>
                <Col lg='6'>
                    <img className='w-100 rounded-2' src={course.image_url} alt="" />
                    <p className='bg-success mt-2 p-2 text-white fs-3 rounded-1'>Item Name: {course.title}</p>
                    <p className='bg-success mt-2 p-2 text-white fs-3 rounded-1'>Course Duration: {course.advisor.course_duration}Months</p>
                    <p className='bg-success mt-2 p-2 text-white fs-3 rounded-1'>Total Seat: {course.total_seat}</p>
                </Col>
                <Col lg='6'>
                    <div>
                        <p className='bg-success p-1 text-white fs-4 text-center rounded-1'>Billing Name: {user?.displayName}</p>
                        <MDBInput wrapperClass='mb-2 text-white' name='pre_address' label='Present Address' id='formControlLg1' type='Text' size="md" placeholder='Enter your Present Address' />
                        <MDBInput wrapperClass='mb-2 text-white' name='per_address' label='Permanent Address' id='formControlLg2' type='Text' size="md" placeholder='Enter your Permanent Address' />
                        <MDBInput wrapperClass='mb-2 text-white' name='phone' label='Phone Number' id='formControlLg3' type='number' size="md" placeholder='Enter your Phone Number' />
                        <MDBInput wrapperClass='mb-2 text-white' name='area' label='Division' id='formControlLg4' type='text' size="md" placeholder='Your Area / Division' />
                        <MDBInput wrapperClass='mb-1 text-white' name='p_code' label='Zip-Code/Postal-Code' id='formControlLg5' type='number' size="md" placeholder='PostalCode' />
                        <p className='bg-success mt-2 p-2 text-white fs-5 text-end rounded-1'>Total Amount: ${course.total_seat}</p>
                        <button onClick={handleCheckOut} className='bg-danger w-100 mt-2 p-2 text-white fs-5 rounded-1'><Link className='text-decoration-none text-white' to='/courses'>Enroll Now</Link></button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CheckOut;