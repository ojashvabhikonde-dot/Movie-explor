import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Favorites from "../pages/Favorites";

const AppRoutes = () => {
  return (
    <Routes>

    
      <Route
        path="/"
        element={<Dashboard />}
      />

      
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />



      <Route
        path="/profile"
        element={<Profile />}
      />


     
      <Route
        path="/favorites"
        element={<Favorites />}
      />


    </Routes>
  )
}

export default AppRoutes;