import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
    // login with email & password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const googleProviderLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // sign in with github
    const githubProviderLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }

    // forget password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        verifyEmail,
        signIn,
        googleProviderLogin,
        githubProviderLogin,
        logOut,
        resetPassword,
        loading
    }

    useEffect(() => {
        // when the component will mount then it will run
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            // when the component will unmount then it will run
            unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;