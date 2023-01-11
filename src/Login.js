import React from "react";
import "./Login.css";
import logo from "./assets/gmail.png";
import { Button } from "@mui/material";
import { auth, db } from "./firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, email, uid, photoURL },
    } = await signInWithPopup(auth, provider);

    await setDoc(doc(db, "users", uid), {
      uid: uid,
      displayName: displayName,
      email: email,
      photoUrl: photoURL,
    });

    dispatch(
      login({
        uid: uid,
        displayName: displayName,
        email: email,
        photoUrl: photoURL,
      })
    );
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
