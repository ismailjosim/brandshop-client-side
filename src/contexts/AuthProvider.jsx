import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from '../config/firebase.config';
import axios from 'axios';
import toast from 'react-hot-toast';



export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //============>  Create User <============//
    // create user with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // with Google Provider
    const googleProviderLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // with Github Provider
    const githubProviderLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    //============>  Login User <============//
    // Login user with email and password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //============>  Manage User <============//
    // update User Profile
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }


    // Monitor user changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const loggedUser = { email: currentUser?.email };
            setUser(currentUser)
            setLoading(false);
            if (currentUser) {
                axios.post('https://moviedb-sigma-bice.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        if (res.data) {
                            // console.log("Token", res.data)
                            // toast.success("Token Added ⭐")
                        }
                    })
            } else {
                axios.post('https://moviedb-sigma-bice.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        if (res.data) {
                            console.log("Token", res.data)
                            // toast.success("Token Removed ⭐")
                        }
                    })
            }
        })

        return () => {
            return unsubscribe();
        }
    }, [])


    // user Logout
    const userLogout = () => {
        return signOut(auth)
    }



    const authInfo = {
        user,
        loading,
        googleProviderLogin,
        githubProviderLogin,
        updateUserProfile,
        createNewUser,
        userLogin,
        userLogout
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
