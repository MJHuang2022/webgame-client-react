import { useContext } from "react";
import Authbar from "./Authbar";
import AuthContext from "../Context/AuthContext";
import UserMenu from "./UserMenu";
import { NavLink } from "react-router-dom";
import "./NavigationHead.css";

const NavigationHead = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="w3-bar w3-pale-blue">
      <div className="w3-container w3-left">
        <p className="w3-medium">WebGame</p>
      </div>

      <div className="w3-container w3-left">
        <button className="w3-btn w3-text-green">
          <NavLink to="/" end>
            <i className="fa fa-home w3-xlarge w3-padding"></i>
          </NavLink>
        </button>
      </div>

      {!authCtx.isSignined && <Authbar />}
      {authCtx.isSignined && <UserMenu />}
    </div>
  );
};

export default NavigationHead;
