import React, { useRef, useState, useEffect } from "react";
import axios from "../../axios";
import "./sign-in.styles.css";

const SignIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [token, setToken] = useState("");
  const [name, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("/sign-in", { username, password });
      console.log(response.data);
      setToken(response.data);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
      setUsername("");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      showUser();
    }
  }, [token]);

  const showUser = async () => {
    try {
      const response = await axios.get("/sign-in", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      setUsername(response.data.username);
      setError("");
    } catch (error) {
      console.log(error);
      setUsername("");
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1 className="auth-title">Sign In</h1>
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
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
        {name && <div className="auth-message success">Welcome, {name}!</div>}
        {error && <div className="auth-message error">{error}</div>}
      </form>
      {isLoading && <div className="auth-loading"></div>}
    </div>
  );
};

export default SignIn;
