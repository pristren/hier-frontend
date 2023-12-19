import { useProfile } from "@/components/hooks/userHooks";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  // const { userProfile, loading } = useProfile();

  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  return !user && !accessToken && !loading ? (
    // dispatch(userFrom(location)),
    <Navigate to={`/signin`} state={{ from: location }} />
  ) : (
    // <Navigate to={`/signin`} />
    children
  );
};

export default AuthProtected;
