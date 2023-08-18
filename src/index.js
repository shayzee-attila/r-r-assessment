import React from "react";
import { createRoot } from "react-dom";  
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Login from "./Login";
import Home from "./Home";
import Account from "./Account";
import Unauthorized from "./Unauthorized";
import { useUser } from "./UserContext";

const ProtectedRoute = ({ element }) => {  // Change 'component' prop to 'element'
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <UserProvider>
    <Router>
      <Routes>
        {/* Always show the login page */}
        <Route path="/" element={<Login />} />

        {/* Protected routes */}
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/account" element={<ProtectedRoute element={<Account />} />} />

        {/* Unauthorized route */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Redirect unmatched routes to the login page */}
        <Route path="*" element={<Navigate to="/unauthorized" />} />
      </Routes>
    </Router>
  </UserProvider>
);

