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
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                toast.success('user Created Successfully')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage, { autoClose: 500 })

            })
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <MDBContainer fluid className="p-3 my-3">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    <h1 className='text-center text-success mb-4'>Please Register Here</h1>
                    {/* <p className='text-center text-white'>{error}</p> */}
                    <Form onSubmit={handleSubmit}>
                        <MDBInput wrapperClass='mb-4 text-white' name='name' label='Name' id='formControlLg1' type='text' size="lg" placeholder='Enter your name' />
                        <MDBInput wrapperClass='mb-4 text-white' name='photoURL' label='Photo URL' id='formControlLg2' type='text' size="lg" placeholder='photo URL' />
                        <MDBInput wrapperClass='mb-4 text-white' name='email' label='Email address' id='formControlLg3' type='email' size="lg" placeholder='Enter your email' />
                        <MDBInput wrapperClass='mb-4 text-white' name='password' label='Password' id='formControlLg4' type='password' size="lg" placeholder='Enter your password' />

                        <button type='submit' color='success' className="mb-4 w-100 bg-success rounded-2 p-2 text-white" size="lg">Register</button>
                    </Form>

                    <div className="divider mb-3">
                        <p className="text-center text-white fw-bold mx-3 mb-0">Already Have an Account? <Link to='/login'>SignIn</Link></p>
                    </div>
                    <div className="divider mb-3">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <button className="mb-4 w-100 rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#3b5998', border: 0 }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Sign In With Google
                    </button>

                    <button className="mb-4 w-100 rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#808080', border: 0 }}>
                        <MDBIcon fab icon="github" className="mx-2" />
                        Sign In with Github
                    </button>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Register;