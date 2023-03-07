import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { provider } from "../config/firebase";
import useAuth from "../store/useAuth";

export const LoginPage: React.FC = () => {
  const { setUser, setToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const onLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          setToken(token);
          setUser(user);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <button onClick={onLogin} className="custom-button">
        Login with google
      </button>
    </div>
  );
};
