import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import _ from "lodash";
import UserCard from "./UserCard";
import { getPropertyCardUserInfo } from "./PropertyInputSchema";

const PropertyCard = (props) => {
  const userCtx = useContext(AuthContext);

  const commonUserProperty = Object.entries(
    getPropertyCardUserInfo(userCtx.user)
  );
  if (_.isEmpty(commonUserProperty)) {
    return (
      <div className="w3-left w3-light-gray w3-padding">
        <p>Please upload your properties.</p>
      </div>
    );
  } else {
    return (
      <div className="w3-container w3-row" style={{ margin: "0", padding: "0" }}>
        <div className="w3-half w3-right">
          <UserCard txtClass="w3-xlarge w3-text-blue" />
        </div>

        {commonUserProperty.map((value, key) => {
          return (
            <div key={key} className="w3-rest w3-row w3-margin w3-padding">
              <p
                className="w3-large w3-col s3 m3 l3 w3-text-green"
                style={{ margin: "0", padding: "0" }}
              >
                {_.capitalize(value[0])}
              </p>{" "}
              <p
                className="w3-large w3-col s9 m9 l9 w3-border-bottom "
                style={{ margin: "0", padding: "0 16px" }}
              >
                {value[1]}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default PropertyCard;
