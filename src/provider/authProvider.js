import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "helpers";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // not logged in so redirect to login page with the return url
      navigate("/login", { state: history.location });
    }
  }, [isAuthenticated, navigate]);

  // authorized so return child components
  return children;
}

export { AuthProvider };
