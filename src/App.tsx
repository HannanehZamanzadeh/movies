import Header from "./components/Header/Header";
import RootLayOut from "./pages/root";
import GenrePage from "./pages/Genre";
import SeriesPage from "./pages/Series";
import AuthApp from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import flagsmith from "flagsmith";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [isNewFeatureEnabled, setIsNewFeatureEnabled] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    // Only initialize flagsmith if userId is found (i.e. after login)
    if (userId) {
      flagsmith.init({
        environmentID: "9788d96bb9c03773bc063ed8dfcbf12f613ff818",
        identity: userId,
        onChange: () => {
          const enabled = flagsmith.hasFeature("profile");
          setIsNewFeatureEnabled(enabled);
        },
      });
    }
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <RootLayOut /> },
    { path: "/genre", element: <GenrePage /> },
    { path: "/series", element: <SeriesPage /> },
    { path: "/signup", element: <AuthApp /> },
    { path: "/signin", element: <SignInPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={router}>
        <Header />
        {isNewFeatureEnabled && (
          <div className="profile">🎉 New Dashboard is Enabled!</div>
        )}
      </RouterProvider>
    </div>
  );
};

export default App;
