import React from "react";
import ReactDOM from "react-dom";

export const MyFunction = () => {
	return <h1>I Love React</h1>;
};

// change the syntax of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(<MyFunction />, document.querySelector("#myDiv"));
