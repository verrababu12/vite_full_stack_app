import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Replaces history with useNavigate

  const onSubmitSuccess = () => {
    navigate("/home");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "/api/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      onSubmitSuccess();
    }
  };

  const renderPasswordField = () => (
    <>
      <label className="input-label-2" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="input-filed"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );

  const renderUsernameField = () => (
    <>
      <label className="input-label-2" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="input-filed"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );

  return (
    <div className="login-form-container-2">
      <form className="login-card-2" onSubmit={submitForm}>
        <h1 className="main-heading-2">Login Form</h1>
        <div className="input-container-2">{renderUsernameField()}</div>
        <br />
        <div className="input-container-2">{renderPasswordField()}</div>
        <button type="submit" className="button">
          Login
        </button>
        <p>Dont have an account?</p>

        <Link to="/">
          <button type="button" className="sign-up-button-2">
            SIGN UP
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
