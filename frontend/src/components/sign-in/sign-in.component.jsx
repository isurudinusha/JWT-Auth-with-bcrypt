import { useRef, useState, useEffect } from "react";
import axios from "../../axios";
import "./sign-in.styles.css";

function SingIn() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [token, setToken] = useState("");
  const [name, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    document.querySelector(".sign-in-loading").style.display = "block";

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("/sign-in", {
        username,
        password,
      });
      console.log(response.data);
      setToken(response.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setUsername("");
      document.querySelector(".sign-in-loading").style.display = "none";
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setUsername(response.data.username);
      setError("");
      document.querySelector(".sign-in-loading").style.display = "none";
    } catch (error) {
      console.log(error);
      setUsername("");
      setError(error.response.data.message);
      document.querySelector(".sign-in-loading").style.display = "none";
    }
  };

  return (
    <>
      <div className="sign-in-container">
        <div className="sign-in-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" ref={usernameRef} required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordRef} required />
              <button type="submit">Sign In</button>

              {name ? (
                <div className="home">
                  <h1>Welcome {name}</h1>
                </div>
              ) : null}
              {error ? <div className="error">Error: {error}</div> : null}
            </div>
          </form>
          <div className="sign-in-loading">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingIn;
