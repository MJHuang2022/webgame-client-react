import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Home = () => {
  const userCtx = useContext(AuthContext);

  return (
    <div className="w3-text-blue w3-xxxlarge w3-center">
      {userCtx.isSignined && <p className="w3-xlarge">{userCtx.user.email}</p>}
      <p>Welcome to WebGame</p>
    </div>
  );
};

export default Home;
