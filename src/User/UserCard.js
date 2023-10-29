import { useContext } from "react";
import "./UserCard.css";
import AuthContext from "../Context/AuthContext";
import { getImageUrl } from "../DataAccess/ServerInfo";

const UserCard = (props) => {
  const userCtx = useContext(AuthContext);

  return (
    <div className="w3-center">
      <img
        src={`${
          (userCtx.user.image && getImageUrl() + userCtx.user.image) ||
          "../../logo512.png"
        }`}
        alt="User"
        className={`user-card-img ${
          (props.imgClass && props.imgClass) || "w3-circle"
        }`}
      />
      <p className={`${(props.txtClass && props.txtClass) || "w3-medium"}`}>
        {userCtx.user.email}
      </p>
    </div>
  );
};

export default UserCard;
