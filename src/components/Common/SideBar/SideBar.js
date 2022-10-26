import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://teachza-server-parvez1407.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-success mb-4 mt-3'>Our Courses</h2>
            {
                courses.map(category => <p
                    className='w-100 p-3 category-hover shadow-sm'
                    key={category.id}
                ><Link className='text-decoration-none text-white' to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default SideBar;