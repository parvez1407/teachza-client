import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='dark' className='text-center text-white text-lg-left mt-5 bg-dark'>
            <MDBContainer className='p-4 pb-0 '>
                <form action=''>
                    <MDBRow className='d-flex justify-content-center p-5'>
                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <p className='pt-2'>
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </MDBCol>

                        <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                            <MDBInput type='text' id='form5Example2' label='Email address' contrast />
                        </MDBCol>

                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <MDBBtn outline color='light'>
                                Subscribe
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href='https://mdbootstrap.com/'>
                    TEACHZA
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;