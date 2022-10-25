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

const Register = () => {
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>


                    <Form>
                        <MDBInput wrapperClass='mb-4' name='name' label='Name' id='formControlLg' type='text' size="lg" placeholder='Enter your name' />
                        <MDBInput wrapperClass='mb-4' name='email' label='Email address' id='formControlLg' type='email' size="lg" placeholder='Enter your email' />
                        <MDBInput wrapperClass='mb-4' name='password' label='Password' id='formControlLg' type='password' size="lg" placeholder='Enter your password' />

                        <MDBBtn color='success' className="mb-4 w-100" size="lg">Register</MDBBtn>
                    </Form>

                    <div className="divider mb-3">
                        <p className="text-center fw-bold mx-3 mb-0">Already Have an Account? <Link to='/login'>SignIn</Link></p>
                    </div>
                    <div className="divider mb-3">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998', border: 0 }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Sign In With Google
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#808080', border: 0 }}>
                        <MDBIcon fab icon="github" className="mx-2" />
                        Sign In with Github
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Register;