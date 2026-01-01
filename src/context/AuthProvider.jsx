import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInWithGoogle = () => signInWithPopup(auth, googleProvider);

  const signIn = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {

    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    })
    return () => {
      unsubscrib();
    }
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logInWithGoogle,
    signIn,
    logOut,
  }



  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;