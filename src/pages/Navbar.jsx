import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
 // import { setSearchTerm } from "./redux/movieSlice";
// import { logout } from "./redux/authSlice";

const Navbar = () => {


    const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[black] border-b border-white/5">
      <div className="max-w-[1300px] mx-auto px-12 h-22 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-4 px-3 pr-6 h-13 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-[0_0_30px_rgba(255,80,80,0.35)]">
            <div className="w-10 h-10 rounded-full bg-[#2b1f22] flex items-center justify-center">
              <span className="text-white font-bold text-xl">MB</span>
            </div>

            <span className="text-white text-xl font-bold tracking-[2px]">
              MovieBox
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-16">
          <button
            onClick={() => navigate("/")}
            className="text-white text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Home
          </button>

         <button
  onClick={() => navigate("/favorites")}
  className="text-gray-300 text-md font-semibold hover:text-orange-400 transition"
>
  Favorites 
</button>

          <button
            onClick={() => navigate("/profile")}
            className="text-gray-300 text-md font-semibold hover:text-orange-400 cursor-pointer transition"
          >
            Profile
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search movies..."
            className="
  px-4
  py-2
  rounded-full
  bg-white/5
  border
  border-white/10
  text-white
  outline-none
  "
           // onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />

          {user ? (
            <button
               //onClick={() => dispatch(logout())}
              className="h-11 px-6 rounded-full border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition"
            >
              {user.name}
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="h-11 px-8 rounded-3xl border border-orange-500/20 bg-[#25171b] text-[#f6b17a] text-lg font-medium hover:bg-[#2f1c21] transition"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => navigate("/favorites")}
            className="cursor-pointer h-11 px-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold shadow-[0_0_25px_rgba(255,120,0,0.35)] hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>
        
      </div>
    </header>
  );
};


export default Navbar