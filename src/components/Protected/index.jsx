import axios from "axios";
import { useEffect } from "react";

const Protected = ({ children }) => {

  const getProfile = async (token) => {
    if(!token) {
      return (window.location = "/login");
    }
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/authUser/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.request(config);
    } catch (error) {
      localStorage.removeItem("token");
      window.location = "/";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfile(token);
  }, []);

  return children;
};

export default Protected;
