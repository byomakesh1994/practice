import React, { useEffect, useState } from "react";
import Home from "./Home";

const Registration = () => {
  const [login, setLogin] = useState(false);
  const value = localStorage.getItem("user");
  const val = JSON.parse(value);
  useEffect(() => {
    if (val) {
      setLogin(true);
    }
  }, []);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please Fill Data");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setLogin(true);
    }

    resetUser();
  };

  const resetUser = () => {
    setUser({ username: "", email: "", password: "" });
  };
  return (
    <>
      {!login ? (
        <>
          <div>Registration From</div>
          <form onSubmit={formSubmit}>
            <div>
              <h1>Sign Up</h1>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <button type="submit">Sign Up</button>
                <button type="button" onClick={resetUser}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Registration;
