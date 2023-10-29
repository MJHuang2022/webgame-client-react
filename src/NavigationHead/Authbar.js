import { NavLink } from "react-router-dom";
import "./Authbar.css";

const Authbar = () => {
  return (
    <div className="w3-container w3-right w3-padding">
      <button className="w3-btn w3-round-xxlarge signup">
        <NavLink className="link-button" to="/signup" end>
          Signup
        </NavLink>
      </button>
      <button className="w3-btn w3-round-xxlarge signin">
        <NavLink className="link-button" to="/signin" end>
          Signin
        </NavLink>
      </button>
    </div>
  );
};

export default Authbar;
