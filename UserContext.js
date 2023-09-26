// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the UserContext and UserProvider
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State to hold the current user's information
  const [user, setUser] = useState(null);

  // Function to handle user registration (signup)
  const signup = (formData) => {
    // Implement user registration logic here
    // Example: Save user data to local storage or send it to a server
    // Set the user state upon successful registration
    setUser(formData);
  };

  // Function to handle user login
  const login = (formData) => {
    // Implement user login logic here
    // Example: Validate user credentials against stored data
    // Set the user state upon successful login
    setUser(formData);
  };

  // Function to handle user logout
  const logout = () => {
    // Implement logout logic here, e.g., clearing user data
    setUser(null);
  };

  // Value object to be provided by the context
  const contextValue = {
    user,
    signup,
    login,
    logout,
  };

  // Provide the context to child components
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
