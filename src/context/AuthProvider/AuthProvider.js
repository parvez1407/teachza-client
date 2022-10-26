import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user with email % password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user profile update
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // email verification 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // sign in with google
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }



    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        verifyEmail,
        providerLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;