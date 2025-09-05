import { useState, useRef } from "react";
import Header from "./Header";
import { BG_IMG, USER_ICONS } from "../utils/constants";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { generateRandomNumber } from "../utils/commons";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    name: null,
    loginApi: null,
  });

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const profilePic = () => {
    const index = generateRandomNumber(USER_ICONS);
    return USER_ICONS[index];
  };

  const handleButtonClick = () => {
    // Validate the Form Data
    const fields = {
      email: { value: email.current.value, validate: validateEmail },
      password: { value: password.current.value, validate: validatePassword },
      ...(isSignInForm
        ? {}
        : { name: { value: name.current.value, validate: validateName } }),
    };

    let newErrors = {};
    let hasError = false;

    Object.entries(fields).forEach(([key, { value, validate }]) => {
      const errorMessage = validate(value);
      newErrors[key] = errorMessage;
      if (errorMessage) hasError = true;
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (hasError) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const photoURL = profilePic();

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrors((prev) => ({
                ...prev,
                loginApi: `${error.message || error.toString()}`,
              }));
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrors((prev) => ({
            ...prev,
            loginApi: `${errorCode}: ${errorMessage}`,
          }));
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrors((prev) => ({
            ...prev,
            loginApi: `${errorCode}: ${errorMessage}`,
          }));
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bgImage" className="bg-cover" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/4 absolute p-10 bg-black rounded-lg my-36 mx-auto right-0 left-0 text-white bg-opacity-85"
      >
        <h1 className="font-semibold text-4xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 w-full rounded-md bg-gray-800/50 border border-gray-500 focus:border focus:outline-1 focus:outline-offset-4 focus:outline-white"
            />
            <p className="text-red-500 py-0.5 text-sm/tight font-light">
              {errors.name}
            </p>
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full rounded-md bg-gray-800/50 border border-gray-500 focus:border focus:outline-1 focus:outline-offset-4 focus:outline-white"
        />
        <p className="text-red-500 py-0.5 text-sm/tight font-light">
          {errors.email}
        </p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded-md bg-gray-800/50 border border-gray-500 focus:border focus:outline-1 focus:outline-offset-4 focus:outline-white"
        />
        <p className="text-red-500 py-0.5 text-sm/tight font-light">
          {errors.password}
        </p>
        <p className="text-red-500 py-2 text-sm/tight font-light">
          {errors.loginApi}
        </p>
        <button
          className="p-3 my-4 bg-red-600 w-full rounded-md cursor-pointer hover:bg-red-700"
          onClick={handleButtonClick}
        >
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
