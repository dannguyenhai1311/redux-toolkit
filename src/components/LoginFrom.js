import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../features/auth/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
 

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      dispatch(loginSuccess({ username: username }));
    } else {
      dispatch(loginFailure("Invalid username or password."));
    }
  };

  return (
    <div className="flex items-center justify-center flex-center gap-x-5 p-5 w-[500px]]">
      <form className="flex p-5 gap-x-5" onSubmit={handleLogin}>
      <input  className="p-5 border border-green-400 "
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="p-5 border border-green-400 "
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="px-6 py-3 text-white bg-blue-400 border border-blue-300 rounded-lg" type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
