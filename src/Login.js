import { useForm } from "react-hook-form";
import "./Login.css";
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3001/api/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    console.log(res);
    const data = res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    //send http request
    sendRequest()
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/user"));
  };
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <Box
            className="formBox"
            marginLeft="auto"
            marginRight="auto"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1">Let’s sign you in</Typography>

            <TextField
              name="email"
              onChange={handleChange}
              value={inputs.email}
              variant="outlined"
              type="email"
              placeholder="Email"
              margin="normal"
            />
            <TextField
              name="password"
              onChange={handleChange}
              value={inputs.password}
              variant="outlined"
              type="password"
              placeholder="Password"
              margin="normal"
            />
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#f48634",
                borderColor: "#f48634",
                width: "100%",
              }}
              variant="contained"
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Login;
