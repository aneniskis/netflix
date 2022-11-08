import React from "react";
import { useRef } from "react";
import { auth } from "../firebase.js";
import "./signInScreen.scss";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((authUser) => {
        console.log(authUser.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((authUser) => {
        console.log(authUser.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span>New to NetFlix? Click below </span>
          <button onClick={register}>Sign Up now!</button>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
