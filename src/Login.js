import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useUser } from "./UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUserDetails, setLoggedIn } = useUser();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Set user details in the context
    setUserDetails({ email, password });

    // Mark user as logged in
    setLoggedIn(true);

    // Navigate to Home page
    navigate("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Validation
    if (email === "dj@techsa.com" && password === "P@55w0rd@1") {
      await handleLogin();
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Login:
      </Typography>
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        required
        type="email"
      />
      <TextField
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        required
        type="password"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      {loading && <CircularProgress />}
    </form>
  );
};

export default Login;
