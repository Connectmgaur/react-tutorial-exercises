import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//add the styles here
const mySuperStyles = {
	color: "black",
	fontSize: "16px",
	border: "1px solid yellow",
};

const Badge = (props) => {
	return <div style={mySuperStyles}>I am an alert</div>;
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));
