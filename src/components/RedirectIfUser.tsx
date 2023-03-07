import { Navigate } from "react-router-dom";
import useAuth from "../store/useAuth";

function RedirectIfUser({ children }: { children: JSX.Element }) {
  let auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RedirectIfUser;
