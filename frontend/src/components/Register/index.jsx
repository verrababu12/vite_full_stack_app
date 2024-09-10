import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Replacing `history` with `useNavigate`

  const onSubmitSuccess = () => {
    navigate("/login");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, name, email, password };
    const url = "/api/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      onSubmitSuccess();
    }
  };

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
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
      <label className="input-label" htmlFor="username">
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

  const renderNameField = () => (
    <>
      <label className="input-label" htmlFor="name">
        NAME
      </label>
      <input
        type="text"
        id="name"
        className="input-filed"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );

  const renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        EMAIL
      </label>
      <input
        type="text"
        id="email"
        className="input-filed"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );

  return (
    <div className="login-form-container">
      <form className="login-card" onSubmit={submitForm}>
        <h1 className="main-heading">SignUp Form</h1>
        <div className="input-container">{renderUsernameField()}</div>
        <br />
        <div className="input-container">{renderNameField()}</div>
        <br />
        <div className="input-container">{renderEmailField()}</div>
        <br />
        <div className="input-container">{renderPasswordField()}</div>
        <br />
        <button type="submit" className="form-button">
          SIGN UP
        </button>
        <p className="paragraph">Already have an account?</p>
        <Link to="/login">
          <button type="button" className="sign-in-button">
            SIGN IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
