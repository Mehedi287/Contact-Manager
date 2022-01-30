import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAthuncation from '../Firebase/Firebase.init';
import { useEffect } from 'react';


firebaseAthuncation()
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    console.log(user);

    // -----------create user  with email and password ---------
    const signUpWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.massage)
            })
    }


    // ----------------login with email and password -------------
    const logInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);

            })
            .catch((error) => {
                setError(error.massage)
            })
    }


    // -------------login with google ---------------
    const googleProvider = new GoogleAuthProvider();
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };


    //------------logout ----------------
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, []);


    return {
        user,
        error,
        singInWithGoogle,
        signUpWithEmailAndPassword,
        logInWithEmailAndPassword,
        handleLogOut
    };

};

export default UseFirebase;