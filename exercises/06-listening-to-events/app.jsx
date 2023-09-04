import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = () => {
	const handleClick = () => {
		window.alert("I was clicked!");
	};

	return (
		<button className="btn btn-success btn-lg" onClick={handleClick}>
			Click me
		</button>
	);
};

export default Alert;

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
