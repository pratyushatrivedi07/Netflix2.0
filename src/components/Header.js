import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, logOutUser } from "../store/userSlice";
import { PiStarFourFill } from "react-icons/pi";
import { toggleGptSearchView } from "../store/gptSlice";
import { setPreferredLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(logOutUser());
        navigate("/");
      }
    });

    // Unsubscribe will be called when component will unmount
    return () => unsubscribe(); // Return in useEffect for cleanup
  }, []);

  const handleAISearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    dispatch(setPreferredLanguage(value));
  };

  return (
    <div className="absolute md:px-8 py-2 w-full z-10 flex bg-gradient-to-b from-black justify-between">
      <img
        className={` ${user ? "w-36 mx-0" : "w-44 mx-0"}`}
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center md:gap-x-4 p-2">
          <button
            className="text-white text-sm hover:opacity-70 cursor-pointer p-2 my-2"
            onClick={handleAISearchClick}
          >
            {showGptSearch ? (
              "Home"
            ) : (
              <div>
                <span className="flex items-center">
                  Search with AI
                  <PiStarFourFill className="ml-2 w-5 h-5 fill-red-400" />
                </span>
              </div>
            )}
          </button>
          {showGptSearch && (
            <select
              className="bg-inherit text-white text-sm cursor-pointer outline-none p-2 hover:opacity-70"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="cursor-pointer"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <div className="flex items-center space-x-3 m-2">
            <img
              src={user.photoURL}
              alt="icon"
              className="hidden md:block w-9 h-9 rounded-md"
            />
            <button
              onClick={handleSignOut}
              className="text-white text-sm md:text-xs hover:underline hover:underline-offset-2 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
