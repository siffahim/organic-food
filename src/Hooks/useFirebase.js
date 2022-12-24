import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);

    //register user
    const register = (email, password, name, navigate, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser)
                setError('')

                const uri = location?.state?.from || '/';
                navigate(uri)

                //update on firebase
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {

                    }).catch(err => {
                        setError(err.message)
                    })
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    //login user
    const login = (email, password, navigate, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const uri = location?.state?.from || '/';
                navigate(uri)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    //login with google account
    const googleLogin = (navigate, location) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('')

                //Auto Redirect to corrent place
                const uri = location?.state?.from || '/';
                navigate(uri)
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    //sign out user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert('Successfully logout')
                setUser({})
            })
    }

    //user tracking
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        sessionStorage.setItem('idToken', idToken)
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubcribe;
    }, [])

    return {
        user,
        error,
        isLoading,
        login,
        logOut,
        googleLogin,
        register,

    }
}

export default useFirebase;