import "./App.css";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

function App() {
  return (
    <>
      <span className="title">
        Click the link to start API service:{" "}
        <a
          href="https://jwt-auth-with-bcrypt-by-isuru.onrender.com/"
          target="_blank"
        >
          Start API
        </a>
      </span>
      <div className="App">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default App;
