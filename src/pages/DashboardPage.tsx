import { auth } from "../config/firebase";
import useAuth from "../store/useAuth";

const DashboardPage = () => {
  const { setToken, setUser } = useAuth();

  const onLogout = () => {
    auth.signOut();
    setToken(null);
    setUser(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <button onClick={onLogout} className="custom-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
