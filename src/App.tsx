import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RedirectIfUser from "./components/RedirectIfUser";
import RequireAuth from "./components/RequireAuth";
import { auth } from "./config/firebase";
import DashboardPage from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import useAuth from "./store/useAuth";

const App = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((auth) => {
      setUser(auth);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Layout isPage={false}>Loading...</Layout>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectIfUser>
              <LoginPage />
            </RedirectIfUser>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
