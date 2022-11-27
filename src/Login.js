import React from "react";
import "./Login.css";
import logo from './assets/gmail.png'
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {


    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src={logo}
          alt="logo"
        />
        <Button variant='contained' color="primary" onClick={signIn} >Login</Button>
      </div>
    </div>
  );
};

export default Login;
