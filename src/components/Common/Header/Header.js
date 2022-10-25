import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import teachza from '../../../teachza.png'
import SideBar from '../SideBar/SideBar';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none text-white'><img src={teachza} alt="" /> TEACHZA</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='text-decoration-none text-white me-4' to='/'>Home</Link>
                            <Link className='text-decoration-none text-white me-4' to='/courses'>Courses</Link>
                            <Link className='text-decoration-none text-white me-4' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-white' to='/login'>Login</Link>
                        </Nav>
                        <div className='d-block d-lg-none'>
                            <SideBar></SideBar>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;