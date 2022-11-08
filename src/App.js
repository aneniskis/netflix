import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //loged in

        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        {!user ? (
          <Route path="/" element={<Login />}></Route>
        ) : (
          <>
            <Route index element={<HomeScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
