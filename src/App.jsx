import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";

import Header from "./components/header/header";
import Home from "./components/home/Home";

import { AuthProvider } from "./contexts/authContext/authContext";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;