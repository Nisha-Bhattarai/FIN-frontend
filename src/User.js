import axios from "axios";
import React, { useEffect, useState } from "react";

axios.defaults.withCredentials = true;
let firstRender = true;

function User() {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:3001/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3001/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    console.log(res);
    const data = await res.data;
    console.log(`Data:...... : ${data}`);
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 28);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Hello!</h1>
      {user && <h1>{user.firstName}</h1>}
    </div>
  );
}

export default User;
