import { useNavigate } from "react-router-dom";
import { LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44 ml-15" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-2 p-2">
          <img src={USER_ICON} alt="icon" />
          <button
            onClick={handleSignOut}
            className="text-white font-light text-sm hover:underline hover:underline-offset-2 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
