import Header from "./Header";
import { BG_IMG } from "../utils/constants";
import Login from "./Login";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="bgImage" className="bg-cover" />
      </div>
      <Login />
    </div>
  );
};

export default LandingPage;
