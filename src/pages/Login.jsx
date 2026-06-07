import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();

  const submitHandler = (data)=>{

    const user = JSON.parse(localStorage.getItem("user"));

    if(
      user?.email === data.email &&
      user?.password === data.password
    ){

      dispatch(login(user));
      navigate("/dashboard");

    }else{
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#020B2D] text-white flex">

      {/* LEFT */}

      <div className="hidden lg:flex w-1/2 flex-col justify-center px-24">

        <div className="mb-10">

          <span className="border border-orange-500/30 bg-orange-500/10 px-6 py-3 rounded-full text-orange-300 tracking-[6px] text-sm">
            CINEVIEW
          </span>

        </div>

        <h1 className="text-7xl font-black leading-tight mb-8">
          Welcome to Your <br /> Cinema Hub
        </h1>

        <p className="text-gray-400 text-xl max-w-xl leading-10">
          Discover blockbuster trailers, save your favorite movies,
          and build your ultimate watchlist.
        </p>

      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full max-w-md border border-slate-800 bg-[#07133B]/70 backdrop-blur-lg rounded-[35px] p-10 shadow-2xl"
        >

          <p className="text-orange-300 text-center tracking-[8px] text-sm mb-4">
            WELCOME BACK
          </p>

          <h1 className="text-center text-6xl font-black mb-4">
            Sign In
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Access your personalized cinema experience
          </p>

          <label className="block mb-3 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-[#0C1A48] border border-slate-700 rounded-2xl px-6 py-5 outline-none mb-2"
            {...register("email",{required:"Email Required"})}
          />

          <p className="text-red-400 text-sm mb-5">
            {errors.email?.message}
          </p>

          <label className="block mb-3 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-[#0C1A48] border border-slate-700 rounded-2xl px-6 py-5 outline-none mb-2"
            {...register("password",{required:"Password Required"})}
          />

          <p className="text-red-400 text-sm mb-8">
            {errors.password?.message}
          </p>

          <button className="w-full py-5 rounded-full text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
            Sign In
          </button>

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-slate-700"></div>

            <p className="text-gray-500 text-sm">
              New to CINEVIEW?
            </p>

            <div className="flex-1 h-[1px] bg-slate-700"></div>

          </div>

          <Link to="/register">

            <button
              type="button"
              className="w-full border border-orange-500 text-orange-300 py-5 rounded-full text-lg"
            >
              Create Account
            </button>

          </Link>

        </form>

      </div>

    </div>
  )
}

export default Login;