import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const { googleProviderLogin, githubProviderLogin, signIn, resetPassword } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('')

    // Sign in with email & password
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Successfully Login')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }

    // sign in with google
    const handleGoogleSignIn = () => {
        googleProviderLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('successfully login')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message;
                toast.error(errorMessage);
            })

    }

    // Sign in with github
    const handleGithubSignIn = () => {
        githubProviderLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('successfully login')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }

    // reset password
    const handleResetPassword = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email & Reset Password')
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    <h1 className='text-center text-success mb-4'>Please Login</h1>
                    <Form onSubmit={handleLogIn}>
                        <MDBInput onBlur={event => setUserEmail(event.target.value)} wrapperClass='mb-4 text-white' name='email' label='Email address' id='formControlLg1' type='email' size="lg" placeholder='Enter your email' required />
                        <MDBInput wrapperClass='mb-4 text-white' name='password' label='Password' id='formControlLg2' type='password' size="lg" placeholder='Enter your password' required />


                        <div className="d-flex justify-content-between mb-4">
                            <button onClick={handleResetPassword} style={{ border: 0, backgroundColor: '#000', color: 'green' }}>
                                Forgot password?
                            </button>
                        </div>

                        <button color='success' className="mb-4 w-100 bg-success rounded-2 p-2 text-white" size="lg">Login</button>
                    </Form>

                    <div className="divider mb-3">
                        <p className="text-center text-white fw-bold mx-3 mb-0">Don't Have an Account? <Link to='/register'>Register</Link></p>
                    </div>
                    <div className="divider mb-3">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <button onClick={handleGoogleSignIn} className="mb-4 w-100 rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#3b5998', border: 0 }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Login With Google
                    </button>

                    <button onClick={handleGithubSignIn} className="mb-4 w-100 bg-gray rounded-2 p-2 text-white" size="lg" style={{ backgroundColor: '#808080', border: 0 }}>
                        <MDBIcon fab icon="github" className="mx-2" />
                        Login with Github
                    </button>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Login;