import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    setIsAdminLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    setIsAdminLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogIn = () => {
    setLoading(true);
    setIsAdminLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   update user profile img and name
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setIsAdminLoading(false);
          });
      } else {
        localStorage.removeItem("token");
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    setIsAdminLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loading,
    isAdminLoading,
    logIn,
    googleLogIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
