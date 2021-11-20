import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="App">
      <h2> {props.children}</h2>
      <h2> fullName : {props.fullName} </h2>
      <h2> skills : {props.skills} </h2>
      <button
        style={{
          backgroundColor: "red",
          weight : "50px" ,
          height: "60px",
          border: "white",
          borderRadius: "25%",
        }}
        onClick={() => props.showname(props.fullName)}>
        ClickMe
      </button>
    </div>
  );
};
//Default value of props
Profile.defaultProps = {
  fullName: "unknown",
  skills: "unknown",
};
//check Props Type.
Profile.propTypes = {
  fullName: PropTypes.string,
  skills: PropTypes.string,
};
export default Profile;
