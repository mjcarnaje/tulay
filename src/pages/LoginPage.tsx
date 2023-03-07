import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { provider } from "../config/firebase";

export const LoginPage: React.FC = () => {
  const onLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;

          console.log({ token, user });
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
      <button
        onClick={onLogin}
        className="bg-emerald-500 text-white py-4 px-8 rounded-lg hover:bg-emerald-600 transition-all duration-75"
      >
        Login with google
      </button>
    </div>
  );
};
