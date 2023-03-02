import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Registration from "./Registration";
const Home = () => {
  const [login, setLogin] = useState(false);
  const value = localStorage.getItem("user");
  const val = JSON.parse(value);
  useEffect(() => {
    if (val) {
      setLogin(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.clear();
    setLogin(false);
  };
  return (
    <>
      {!login ? (
        <Registration />
      ) : (
        <>
          <Card
            title="Hello User"
            style={{
              width: 300,
            }}
          >
            <p>Name : {val.username}</p>
            <p>Email : {val.email}</p>
            <p>Password : {val.password}</p>
          </Card>
          <button type="button" onClick={logoutHandler}>
            LogOut
          </button>
        </>
      )}
    </>
  );
};

export default Home;
