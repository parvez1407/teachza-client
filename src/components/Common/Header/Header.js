import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import teachza from '../../../teachza.png';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [navColor, setNavColor] = useState(false);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }

    const handleToggleButton = () => {
        setNavColor(!navColor)
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg={`${(navColor === true) ? 'dark' : 'success'}`} variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none text-white fs-4'><img title='TEACHZA' src={teachza} alt="" /> TEACHZA</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='text-decoration-none text-white me-4' to='/'>Home</Link>
                            <Link className='text-decoration-none text-white me-4' to='/courses'>Courses</Link>
                            <Link className='text-decoration-none text-white me-4' to='/blog'>Blog</Link>
                            <>
                                {user?.uid ?
                                    <>
                                        <Link to='/'><button onClick={handleLogOut} className='border-0 text-white ms-1 bg-transparent'>logout</button></Link>
                                        <>
                                            {user?.photoURL ?
                                                <Image
                                                    roundedCircle
                                                    title={user.displayName}
                                                    src={user?.photoURL}
                                                    style={{ height: '30px', marginLeft: '10px' }}
                                                ></Image>
                                                :
                                                <FaUserCircle style={{ fontSize: '30px' }} />}
                                        </>
                                    </>
                                    :
                                    <Link className='text-decoration-none text-white' to='/login'>Login</Link>
                                }
                            </>
                            <button onClick={handleToggleButton} className='border-0 rounded-2 ms-4 bg-white p-1'>Toggle Color</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;