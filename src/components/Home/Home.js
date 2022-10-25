import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='mb-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YhjndQR/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='fw-bolder'>Welcome to TEACHZA</h2>
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
                        <h2 className='fw-bolder'>Welcome to TEACHZA</h2>
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
                        <h2 className='fw-bolder'>Welcome to TEACHZA</h2>
                        <p>Our online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;