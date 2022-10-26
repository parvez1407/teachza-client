import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Common/CourseSummary/CourseSummary';
import {
    MDBRow,
} from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../Common/SideBar/SideBar';


const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <SideBar></SideBar>
                    </Col>
                    <Col lg='9'>
                        <h2 className='text-center text-success fw-bold'>All Courses Of {categoryCourses[0].category_name}</h2>
                        <MDBRow style={{ rowGap: 20 }} className='mb-5'>
                            {
                                categoryCourses.map(course => <CourseSummary
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

export default Category;