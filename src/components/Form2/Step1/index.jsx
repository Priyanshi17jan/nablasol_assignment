import React from "react";
import ProfileForm from "./ProfileForm";

// import css
import "./style.scss";

const ProfileInfo = () => {
  return (
    <>
      <span className="step-counter">Step 1</span>
      <h2 className="profile-form-title">Your Profile</h2>
      <p className="instructions">
        Enter the login information for your account. You will be able to create
        additional users after registering.
      </p>
      <ProfileForm />
    </>
  );
};

export default ProfileInfo;
