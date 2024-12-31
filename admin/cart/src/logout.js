import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/userRedux"; // Ensure you have a logout action in your Redux store
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/login", { replace: true });
  }, [dispatch, navigate]);

  return null;
};

export default Logout;