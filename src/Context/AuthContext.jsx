import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // Login function
  const login = async (formData) => {
    try {
      setLoading(true); // Set loading state
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      const { token, } = response.data;

      // Display success or error message
      if (token) {
        Swal.fire({
          text: "You have successfully logged in",
          icon: "success",
          background: "#D1D5DB",
        });

        // Save token to localStorage
        localStorage.setItem("authToken", token);

        // Update the current user state
        // setCurrentUser(user);

        // Navigate to the homepage
        // navigate("/");
      } else {
        Swal.fire({
          text: message || "Login failed",
          icon: "error",
          background: "#FDE2E4",
        });
      }

      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      console.log(error);
      Swal.fire({
        text: error.response?.data?.message || "An error occurred during login",
        icon: "error",
        background: "#FDE2E4",
      });
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
    // navigate("/login");
  };


  // Fetch logged-in user
  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      const response = await axios.get(
        "http://localhost:5000/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCurrentUser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      logout();
    }
  };

  // Automatically fetch the current user on mount
  useEffect(() => {
    fetchCurrentUser();
  }, []);


  console.log('CurrentUser', currentUser);

  const value = {
    currentUser, 
    login, 
    logout, 
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
