import React, { useRef, useState } from "react";
import axios from "../../axios";
import "./sign-up.styles.css";

const SignUp = () => {
  const displayNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const displayName = displayNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const user = { displayName, username, password };

    try {
      const response = await axios.post("/sign-up", user);
      console.log(response.data);
      setError("Success!");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1 className="auth-title">Sign Up</h1>
        <div className="form-group">
          <input
            type="text"
            id="displayName"
            ref={displayNameRef}
            required
            placeholder="Display Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="username"
            ref={usernameRef}
            required
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            ref={passwordRef}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className="auth-button" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
        {error && (
          <div
            className={`auth-message ${
              error === "Success!" ? "success" : "error"
            }`}
          >
            {error}
          </div>
        )}
      </form>
      {isLoading && <div className="auth-loading"></div>}
    </div>
  );
};

export default SignUp;
