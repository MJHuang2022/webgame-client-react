import { useContext, useState } from "react";
import UserCard from "./UserCard";
import UserProperty from "./UserProperty";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import PropertyEditor from "./PropertyEditor";

const PropertyAction = Object.freeze({
  Edit: "Edit",
  Show: "Show",
});

const User = () => {
  const authCtx = useContext(AuthContext);
  const [propertyAction, setPropertyAction] = useState(PropertyAction.Show);

  if (!authCtx.isSignined) {
    return <Navigate to="/" />;
  }

  const clickEditProperty = () => {
    setPropertyAction(PropertyAction.Edit);
  };

  const clickShowProperty = () => {
    setPropertyAction(PropertyAction.Show);
  };

  return (
    <div className="w3-row">
      <div className="w3-col s3 m3 l3 ">
        <div className="w3-container w3-pale-blue w3-border w3-hover-border-green">
          <UserCard
            imgClass="w3-margin-top w3-round-xxlarge"
            txtClass="w3-large"
          />
        </div>
        <div className="w3-container w3-pale-blue w3-border w3-hover-border-green">
          <p className="w3-center w3-xlarge w3-text-green">User Property</p>
          <div className="w3-container w3-margin-top">
            <button
              className="w3-btn w3-round-xxlarge w3-green w3-block w3-margin-top"
              onClick={clickEditProperty}
            >
              <p className="w3-medium" style={{ margin: 0 }}>
                Edit
              </p>
            </button>
            <button
              className="w3-btn w3-round-xxlarge w3-green w3-block w3-margin-top w3-margin-bottom"
              onClick={clickShowProperty}
            >
              <p className="w3-medium" style={{ margin: 0 }}>
                Show
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w3-col s9 m9 l9 e3-gray">
        <div className="w3-container w3-teal">
          <h3 className="w3-align-left">Welcome</h3>
        </div>
        <div style={{ margin: "0", padding: "0" }}>
          {propertyAction === PropertyAction.Show && <UserProperty />}
          {propertyAction === PropertyAction.Edit && <PropertyEditor />}
        </div>
      </div>
    </div>
  );
};

export default User;
