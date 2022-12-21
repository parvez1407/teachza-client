import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Row } from 'react-bootstrap';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='mb-5'>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/YhjndQR/slider-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className='fw-bolder fs-1'>Welcome to TEACHZA</h2>
                            <p>Our online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Db9Tz5g/slider-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className='fw-bolder fs-1'>Welcome to TEACHZA</h2>
                            <p>Our online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/HDnhXdw/slider-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className='fw-bolder fs-1'>Welcome to TEACHZA</h2>
                            <p>Our online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className='mt-5'>
                <div className=''>
                    <h1 className='text-center text-light bolder mb-3 mt-5'>Our Instructors</h1>
                    <Row style={{ rowGap: 20 }} >
                        <Col lg='3' md='6' data-aos="fade-down"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=" />
                                <Card.Body>
                                    <Card.Title>Al-Hasan Talukder</Card.Title>
                                    <Card.Text>
                                        Web Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-down"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1178706421/photo/you-get-what-you-work-for.jpg?s=170667a&w=0&k=20&c=fdqmDNC2beQT9jRUJLWRaHW1Jgauu8EnPOIOJ_tkpYk=" />
                                <Card.Body>
                                    <Card.Title>Monalisa Torofder</Card.Title>
                                    <Card.Text>
                                        Design Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-down"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=170667a&w=0&k=20&c=DScVriJbWdYVLCkGAFd-gABvO5Why2eEG7SpGvl6LpA=" />
                                <Card.Body>
                                    <Card.Title>Najmul Hasan Khan</Card.Title>
                                    <Card.Text>
                                        Multimedia Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-down"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1184331595/photo/home-office.jpg?s=170667a&w=0&k=20&c=DsgsdwSKcRLAJDCHFkLbxwfM5iSZmdQcfj8r4wmwuLs=" />
                                <Card.Body>
                                    <Card.Title>Suton Khan</Card.Title>
                                    <Card.Text>
                                        Marketing Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/926084718/photo/businessman-working-in-home-office.jpg?s=612x612&w=0&k=20&c=VWlcjQMrnGYcoszKu30GdVztphBjpgknei2YXqx60GM=" />
                                <Card.Body>
                                    <Card.Title>Tanvir Hasan</Card.Title>
                                    <Card.Text>
                                        Communication Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1059660850/photo/creative-man-working-on-computer.jpg?s=170667a&w=0&k=20&c=571yhtxWToM1rH46IHMI20K72Cnuass3dafSwWPD3AQ=" />
                                <Card.Body>
                                    <Card.Title>Shahadat Hossain</Card.Title>
                                    <Card.Text>
                                        Programming Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=170667a&w=0&k=20&c=iNil4l7tCCHNGlRw_wfJSRHeQn_67fQj5HDLns74n4o=" />
                                <Card.Body>
                                    <Card.Title>Khokon Talukder</Card.Title>
                                    <Card.Text>
                                        Programming Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='3' md='6' data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card style={{ width: '18rem', background: '#32CD32' }} className='text-light text-center'>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1193290387/photo/portrait-of-young-businessman-standing-in-his-office-with-arms-crossed.jpg?b=1&s=612x612&w=0&k=20&c=BmwGTFjmDjYlTVefex4ohiMhRwL4ot_3Zw6-5iQmi0E=" />
                                <Card.Body>
                                    <Card.Title>Arafat Rahaman</Card.Title>
                                    <Card.Text>
                                        Language Instructor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </section>
        </div>
    );
};

export default Home;