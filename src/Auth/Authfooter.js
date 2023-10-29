import { NavLink } from "react-router-dom";

const Authfooter = (props) => {
  return (
    <div className="w3-container w3-center" >
      <p style={{margin: "0"}}>
        {props.text} 
        <NavLink to={props.linkPath} className="w3-text-blue">
          {props.linkText}
        </NavLink>
      </p>
    </div>
  );
};

export default Authfooter;
