import React from "react";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

const Account = () => {
  const { userDetails, isLoggedIn } = useUser();

  // Styles for account container
  const accountContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  };

  // If not logged in, navigate to the unauthorized page
  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" />;
  }

  // Function to mask the password
  const maskPassword = (password) => {
    return "*".repeat(password.length);
  };

  return (
    <div style={accountContainerStyle}>
      <Typography variant="h4" align="center">
        Account Information
      </Typography>
      {userDetails && (
        <div>
          <Typography variant="body1" align="center">
            Email: {userDetails.email}
          </Typography>
          <Typography variant="body1" align="center">
            Password: {maskPassword(userDetails.password)}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Account;


