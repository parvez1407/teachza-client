import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Common/CourseSummary/CourseSummary';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='text-success text-center mt-4 fw-bold'>Our Courses at a Glance</h2>
            {
                courses.map(course => <CourseSummary
                    key={course._id}
                    course={course}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Home;