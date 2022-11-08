import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const UserAuth = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleAuthProvider = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    googleAuthProvider,
    logOutUser,
    createUser,
    userLogIn,
    loader,
  };

  return (
    <div>
      <UserAuth.Provider value={authInfo}>{children}</UserAuth.Provider>
    </div>
  );
};

export default AuthContext;
