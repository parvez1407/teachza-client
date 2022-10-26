import React from 'react';
import { Form, Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';


const Login = () => {
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    <h1 className='text-center text-success mb-4'>Please Login</h1>
                    <Form>
                        <MDBInput wrapperClass='mb-4 text-white' label='Email address' id='formControlLg1' type='email' size="lg" placeholder='Enter your email' />
                        <MDBInput wrapperClass='mb-4 text-white' label='Password' id='formControlLg2' type='password' size="lg" placeholder='Enter your password' />


                        <div className="d-flex justify-content-between mb-4">
                            <button style={{ border: 0, backgroundColor: '#000', color: 'green' }}>
                                Forgot password?
                            </button>
                        </div>

                        <MDBBtn color='success' className="mb-4 w-100" size="lg">Sign in</MDBBtn>
                    </Form>

                    <div className="divider mb-3">
                        <p className="text-center text-white fw-bold mx-3 mb-0">Don't Have an Account? <Link to='/register'>Register</Link></p>
                    </div>
                    <div className="divider mb-3">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <button className="mb-4 w-100 rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#3b5998', border: 0 }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Login With Google
                    </button>

                    <button className="mb-4 w-100 bg-gray rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#808080', border: 0 }}>
                        <MDBIcon fab icon="github" className="mx-2" />
                        Login with Github
                    </button>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Login;