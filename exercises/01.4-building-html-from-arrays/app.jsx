import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array

const navlinkItems = [
	{
		id: 0,
		text: "Link to google.com",
		url: "https://www.google.com",
	},
	{
		id: 1,
		text: "Link to facebook.com",
		url: "https://www.facebook.com",
	},
	{
		id: 2,
		text: "Link to amazon.com",
		url: "https://www.amazon.com",
	},
];

const content = (
	<ul className="nav">
		{navlinkItems.map((item) => (
			<li key={item.id} className="nav-item">
				<a className="nav-link" href={item.url}>
					{item.text}
				</a>
			</li>
		))}
	</ul>
);

ReactDOM.render(content, document.getElementById("myDiv"));
