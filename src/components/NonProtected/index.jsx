import axios from "axios";
import { useEffect } from "react";

const NonProtected = ({ children }) => {

  const getProfile = async (token) => {
    if(!token) {
      return;
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
      window.location = "/";
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfile(token);
  }, []);

  return children;
};

export default NonProtected;
