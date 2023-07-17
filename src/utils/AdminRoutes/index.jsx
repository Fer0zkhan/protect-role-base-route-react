import { Navigate, Outlet } from "react-router-dom";

const index = () => {
  const isAdmin = false;

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default index;
