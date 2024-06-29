import { useState, useRef } from "react";
import axios from "../../axios";
import "./sign-up.styles.css";

function SignUp() {
  const displayNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector(".sign-up-loading").style.display = "block";
    const displayName = displayNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const user = {
      displayName: displayName,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("/sign-up", user);
      console.log(response.data);
      document.querySelector(".sign-up-loading").style.display = "none";
      setError("success!");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      document.querySelector(".sign-up-loading").style.display = "none";
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <div className="sign-up-form">
        <form className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input type="text" id="displayName" ref={displayNameRef} required />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameRef} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />

          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          {error ? <div className="error-message">{error}</div> : null}
        </form>
        <div className="sign-up-loading">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
