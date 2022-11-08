import React from "react";
import Nav from "../components/Nav";
import "./profileScreen.scss";
import avatar from "../assets/UserAvatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import PlansScreen from "./PlansScreen.jsx";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="avatar" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <PlansScreen />

              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                className="profile__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
