import React, { useState } from "react";
import Registration from "./Registration";
import { Button, Modal } from "antd";
import Home from "./Home";
const Login = () => {
  const [login, setLogin] = useState(false);
  const value = localStorage.getItem("user");
  const val = JSON.parse(value);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const { username, password } = val;
    if (!username || !password) {
      alert("Please Fill Data");
    } else if (username === user.username && password === user.password) {
      setLogin(true);
    } else {
      alert("Please SignIn ");
    }
    resetUser();
  };

  const handleOk = () => {
    setLogin(false);
  };
  const handleCancel = () => {
    setLogin(false);
  };
  const resetUser = () => {
    setUser({ username: "", password: "" });
  };
  return (
    <>
      {val ? (
        <Home />
      ) : (
        <>
          <div>Registration From</div>
          <form onSubmit={formSubmit}>
            <div>
              <h1>Log In</h1>
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
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div>
                <button type="submit">SignIn</button>
                <button type="button" onClick={resetUser}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </>
      )}
      {login ? (
        <>
          <Modal
            title="User"
            open={login}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Already LogedIn Please Go To HomePage</p>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Login;
