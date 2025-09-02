import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-1/3 absolute p-12 bg-black rounded-lg my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-5 my-3 w-full rounded-md bg-gray-700/50 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-5 my-3 w-full rounded-md bg-gray-700/50 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 my-3 w-full rounded-md bg-gray-700/50 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
        />
        <button className="p-3 my-4 bg-red-600 w-full rounded-md cursor-pointer hover:bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="flex items-center gap-x-2 py-4 text-gray-300 font-light">
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <p
            onClick={toggleSignUpForm}
            className="text-white font-medium cursor-pointer hover:underline"
          >
            {" "}
            {isSignInForm ? "Sign up now." : "Sign In"}
          </p>
        </span>
      </form>
    </div>
  );
};

export default Login;
