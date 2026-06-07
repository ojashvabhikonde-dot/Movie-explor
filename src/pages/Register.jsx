import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();

  const submitHandler = (data)=>{

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    alert("Account Created Successfully");

    navigate("/");
  };

  return (
    <div className="  w-full  min-h-screen  bg-[#020B2D] text-white flex">
 
      {/* LEFT SIDE */}

      <div className="hidden lg:flex  flex-col justify-center px-24">

        <div className="mb-10">

          <span className="border border-orange-500/30 bg-orange-500/10 px-6 py-3 rounded-full text-orange-300 tracking-[6px] text-sm">
            CINEVIEW
          </span>

        </div>

        <h1 className="text-6xl font-black leading-tight mb-5">
          Join the Cinema <br /> Community
        </h1>

        <p className="text-gray-400 text-l leading-10 max-w-xl mb-5">
          Create an account and unlock a personalized
          movie experience like no other.
        </p>

        <div className="space-y-3">

          <div className="flex gap-3">

            <div className="text-3xl">
              ⭐
            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">
                Personalized Recommendations
              </h3>

              <p className="text-gray-400">
                Get movie suggestions based on your
                favorites and watch patterns.
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <div className="text-3xl">
              📱
            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">
                Sync Across Devices
              </h3>

              <p className="text-gray-400">
                Access your watchlist and favorites
                anywhere, anytime.
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <div className="text-3xl">
              🎁
            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">
                Exclusive Features
              </h3>

              <p className="text-gray-400">
                Enjoy advanced filters, ratings,
                and curated collections.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT FORM */}

      <div className="w-full  flex justify-center items-center p-6">

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full max-w-xl border border-slate-800 bg-[#07133B]/70 backdrop-blur-lg rounded-[35px] p-10 shadow-2xl"
        >

          <p className="text-orange-300 text-center tracking-[8px] text-sm mb-4">
            GET STARTED
          </p>

          <h1 className="text-center text-5xl font-black mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-400 mb-5">
            Join thousands of movie enthusiasts
          </p>

          {/* NAME */}

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-[#0C1A48] border border-slate-700 rounded-2xl px-6 py-5 outline-none mb-2"
            {...register("name",{
              required:"Name Required"
            })}
          />

          <p className="text-red-400 text-sm mb-2">
            {errors.name?.message}
          </p>

          {/* EMAIL */}

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-[#0C1A48] border border-slate-700 rounded-2xl px-6 py-5 outline-none mb-2"
            {...register("email",{
              required:"Email Required"
            })}
          />

          <p className="text-red-400 text-sm mb-2">
            {errors.email?.message}
          </p>

          {/* PASSWORD */}

          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full bg-[#0C1A48] border border-slate-700 rounded-2xl px-6 py-5 outline-none mb-2"
            {...register("password",{
              required:"Password Required",
              minLength:{
                value:6,
                message:"Minimum 6 characters"
              }
            })}
          />

          <p className="text-red-400 text-sm mb-5">
            {errors.password?.message}
          </p>

          {/* BUTTON */}

          <button className="w-full py-5 rounded-full text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
            Create Account
          </button>

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-slate-700"></div>

            <p className="text-gray-500 text-sm">
              Already a member?
            </p>

            <div className="flex-1 h-[1px] bg-slate-700"></div>

          </div>

          <Link to="/">

            <button
              type="button"
              className="w-full border border-orange-500 text-orange-300 py-3 rounded-full text-lg"
            >
              Sign In
            </button>

          </Link>

        </form>

      </div>

    </div>
  );
};

export default Register;