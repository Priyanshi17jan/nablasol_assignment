import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

// import from slice
import { logout } from "../../reducers/AuthSlice";

// import css
import "./style.scss";

// import component
import Wrapper from "../Wrapper";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = localStorage.getItem("user");

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      dispatch(logout());
      navigate("/");
    }
  };
  return (
    <>
    <header className="header">
      <Wrapper>
        <Link to="/" className="home-link">
          <h1 className="main-title">WELCOME!!!</h1>
          <h2 className="sub-title">Project Manager</h2>
        </Link>
        <nav className="nav-options">
          <a href="#contact" title="Contact us">
            Contact us
          </a>
          {currentUser && (
            <button onClick={handleLogout} className="logout-button">
              Log out
            </button>
          )}
        </nav>
      </Wrapper>
    </header>
  
    <main>
    <section className="instructions" style={{ backgroundColor: '#333', color: 'white', padding: '20px', borderRadius: '8px' }}>
    <h2 style={{ fontSize: '24px', marginBottom: '15px' ,lineHeight:'20px'}}>Task Instructions</h2>
  <p style={{ fontSize: '18px', marginBottom: '10px',lineHeight:'24px' }}>Task 1:  After signing up and logging in, you can view task 1. You can also use sample credentials</p>
  <p style={{ fontSize: '18px', marginBottom: '10px',lineHeight:'24px' }}>Task 2: Available after logging in. Click on "Sign up" to proceed.</p>
<p style={{ fontSize: '18px', marginBottom: '10px' }}>Sample Credentials: </p>
  <p style={{ fontSize: '18px', marginBottom: '10px' }}>Username : user1 
</p>
  <p style={{ fontSize: '18px', marginBottom: '10px' }}>Password: password1 </p>
</section>

    </main>
  </>
  
  );
};

export default Header;
