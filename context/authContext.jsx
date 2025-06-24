
import { StaticIP } from "@/config/staticip";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load from localStorage at first render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      console.log("storedUser")
      console.log(storedUser)
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      setCurrentUser(parsedUser);
      if (parsedUser?.role === "1") setIsAdmin(true);
    }
  }, []);

  // Save currentUser to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        setIsAdmin(currentUser?.role === "1");
      } else {
        localStorage.removeItem("user");
        setIsAdmin(false);
      }
    }
  }, [currentUser]);

  const register = async (formData) => {
    const res = await axios.post(`${StaticIP}api/auth/register`, formData);
    setCurrentUser(res.data);
    return res;
  };

  const admin_register = async (formData) => {
    const res = await axios.post(`${StaticIP}api/auth/admin_register`, formData);
    setCurrentUser(res.data);
    return res;
  };

  const login = async (formData) => {
    const res = await axios.post(`${StaticIP}api/auth/login`, formData, { withCredentials: true });
    setCurrentUser(res.data);
    return res;
  };

  const admin_login = async (formData) => {
    const res = await axios.post(`${StaticIP}api/auth/admin_login`, formData, { withCredentials: true });
    setCurrentUser(res.data);
    return res;
  };

  const logout = async () => {
    await axios.post(`${StaticIP}api/auth/logout`);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        login,
        logout,
        register,
        admin_login,
        admin_register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
