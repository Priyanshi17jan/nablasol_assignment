import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

// import from slice
import { login } from "../../reducers/AuthSlice";

// import css
import "./style.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      navigate("/forms/");
    }
  }, [navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Please enter both username and password.");
    } else {
      // Dispatch login action
      dispatch(login({ username, password }));
      if (!currentUser) {
        setError("Invalid username or password.");
      }
    }
  };

  // Redirect based on authentication status and user role
  useEffect(() => {
    setError("");
    if (currentUser) {
      // Save user data to local storage upon successful login
      localStorage.setItem("user", JSON.stringify(currentUser));
      navigate("/forms/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error login-error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
      </form>
      <span>No account yet?</span>
      <Link to="/create" className="sign-up-link">
        {" "}
        Sign up
      </Link>
    </div>
  );
};

export default Login;
