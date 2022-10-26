import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import Header from '../../components/Common/Header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;