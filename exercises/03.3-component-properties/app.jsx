import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src="https://en.wikipedia.org/wiki/Paul_McCartney#/media/File:Paul_McCartney_2021_(cropped).jpg" />
			<div className="card-body">
				{props.body}
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Paul Mccartney Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter and musician who gained
					worldwide fame with the Beatles
				</p>
				<a href="https://en.wikipedia.org/wiki/Paul_McCartney" className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,

	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
