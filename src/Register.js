import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
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
      .post("http://localhost:3001/api/signup", {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
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
    sendRequest().then(() => navigate("/login"));
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
            <Typography variant="h1">Create an account</Typography>

            <TextField
              name="firstName"
              onChange={handleChange}
              value={inputs.firstName}
              variant="outlined"
              placeholder="First Name"
              margin="normal"
            />
            <TextField
              name="lastName"
              onChange={handleChange}
              value={inputs.lastName}
              variant="outlined"
              placeholder="Last Name"
              margin="normal"
            />
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
              Signup
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Register;
