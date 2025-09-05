import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, logOutUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className={` ${user ? "w-32 ml-10" : "w-44 ml-15"}`}
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-3 p-2">
          <img src={user.photoURL} alt="icon" className="w-9 h-9 rounded-md" />
          <button
            onClick={handleSignOut}
            className="text-white text-sm hover:underline hover:underline-offset-2 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
