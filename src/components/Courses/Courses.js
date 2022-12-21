import React from 'react';

import {
    MDBRow,

} from 'mdb-react-ui-kit';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Common/CourseSummary/CourseSummary';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../Common/SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <SideBar></SideBar>
                    </Col>
                    <Col lg='9' className='mb-5'>
                        <h2 className='text-center text-success fw-bold'>Courses at a Glance</h2>
                        <MDBRow style={{ rowGap: 20 }}>
                            {
                                courses.map(course => <CourseSummary
                                    key={course._id}
                                    course={course}
                                ></CourseSummary>)
                            }
                        </MDBRow>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;