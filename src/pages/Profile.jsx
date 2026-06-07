import React from "react";
import {
  FaHeart,
  FaRegClock,
  FaMoon,
  FaBell,
  FaSave,
  FaGift,
  FaFilm,
  FaDoorOpen,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
 import {removeUser}  from "../redux/authSlice"
// import { currentUser } from "../features/authAction";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  let dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-[#020817] px-6 py-8 pt-30 text-white">
      <div className="mx-auto max-w-6xl space-y-7">
        {/* Profile Header */}
        <div className="flex items-center justify-between rounded-[30px] border border-white/10 bg-[rgb(8,14,31)] px-8 py-7">
          <div className="flex items-center gap-5">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-2xl font-bold shadow-lg shadow-orange-500/30">
              {user.name.charAt(0)}
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-[6px] text-orange-400"> 
                Welcome Back
              </p>

              <h1 className="text-4xl font-bold">{user.name}</h1>

              <p className="text-sm text-slate-400">Member since 2026</p>
            </div>
          </div>

          <button
              onClick={() => dispatch(removeUser)}
            className="cursor-pointer rounded-full bg-pink-600 px-7 py-3 font-medium shadow-lg shadow-pink-500/30 hover:bg-pink-400">
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-[rgb(8,14,31)] p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[5px] text-slate-500">
              Favorites Saved
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold">0</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Movies in your collection
                </p>
              </div>

              <FaHeart size={42} className="text-pink-500" />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[rgb(8,14,31)] p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[5px] text-slate-500">
              Time Spent
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold">+4h</h2>
                <p className="mt-2 text-sm text-slate-400">Watching trailers</p>
              </div>

              <FaRegClock size={42} className="text-violet-400" />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[rgb(8,14,31)] p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[5px] text-slate-500">
              Streak
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold">7 days</h2>
                <p className="mt-2 text-sm text-slate-400">Keep exploring!</p>
              </div>

              <span className="text-5xl">🔥</span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Account */}
          <div className="rounded-[30px] border border-white/10 bg-[rgb(8,14,31)] p-7">
            <h2 className="mb-6 text-3xl font-semibold">Account Information</h2>

            <div className="space-y-4">
              <div className="rounded-3xl bg-[#07142f] p-5">
                <p className="mb-2 text-xs uppercase tracking-[5px] text-slate-500">
                  {user.name}
                </p>
                <p className="font-semibold">{user.user?.name}</p>
              </div>

              <div className="rounded-3xl bg-[#07142f] p-5">
                <p className="mb-2 text-xs uppercase tracking-[5px] text-slate-500">
                  {user.email}
                </p>
                <p className="font-semibold">{user.user?.email}</p>
              </div>

              <div className="rounded-3xl bg-[#07142f] p-5">
                <p className="mb-3 text-xs uppercase tracking-[5px] text-slate-500">
                  Account Status
                </p>

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
                  ✓ Active
                </span>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="rounded-[30px] border border-white/10 bg-[rgb(8,14,31)] p-7">
            <h2 className="mb-6 text-3xl font-semibold">Preferences</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-3xl bg-[#07142f] p-5">
                <div>
                  <h3 className="font-semibold">Dark Mode</h3>
                  <p className="text-sm text-slate-400">Always enabled</p>
                </div>

                <FaMoon className="text-yellow-400" />
              </div>

              <div className="flex items-center justify-between rounded-3xl bg-[#07142f] p-5">
                <div>
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-sm text-slate-400">
                    New movie recommendations
                  </p>
                </div>

                <FaBell className="text-yellow-400" />
              </div>

              <div className="flex items-center justify-between rounded-3xl bg-[#07142f] p-5">
                <div>
                  <h3 className="font-semibold">Data Storage</h3>
                  <p className="text-sm text-slate-400">
                    Local browser storage
                  </p>
                </div>

                <FaSave className="text-violet-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-[30px] border border-white/10 bg-[rgb(8,14,31)] p-7">
          <h2 className="mb-6 text-3xl font-semibold">Quick Actions</h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[24px] border border-white/10 bg-[#07142f] p-8 text-center">
              <FaHeart className="mx-auto mb-4 text-4xl text-pink-500" />
              <h3 className="font-semibold">My Favorites</h3>
              <p className="mt-1 text-sm text-slate-400">0 saved</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#07142f] p-8 text-center">
              <FaFilm className="mx-auto mb-4 text-4xl text-violet-400" />
              <h3 className="font-semibold">Explore</h3>
              <p className="mt-1 text-sm text-slate-400">Browse all movies</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#07142f] p-8 text-center">
              <FaGift className="mx-auto mb-4 text-4xl text-yellow-400" />
              <h3 className="font-semibold">Help Center</h3>
              <p className="mt-1 text-sm text-slate-400">Get support</p>
            </div>

            <div
              onClick={() => dispatch(removeUser())}
              className="cursor-pointer rounded-[24px] border border-pink-500/30 bg-pink-950/20 p-8 text-center"
            >
              <FaDoorOpen className="mx-auto mb-4 text-4xl text-pink-400" />
              <h3 className=" font-semibold text-pink-300">Sign Out</h3>
              <p className="mt-1 text-sm text-pink-300/70">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;