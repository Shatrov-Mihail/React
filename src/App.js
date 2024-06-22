import React, { createElement } from 'react';
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
	const currentYear = new Date().getFullYear(); //Императивный стиль
	//Декларативный стиль начало
	return React.createElement("div", {
	  className: "App"
	}, React.createElement("header", {
	  className: "App-header"
	}, React.createElement("img", {
	  src: logo,
	  className: "App-logo",
	  alt: "logo"
	}), React.createElement("p", null, "Edit ", React.createElement("code", null, "src/App.js"), " and save to reload."), React.createElement("a", {
	  className: "App-link",
	  href: "https://reactjs.org",
	  target: "_blank",
	  rel: "noopener noreferrer"
	}, "Learn React")), React.createElement("footer", {
	  className: "footer"
	}, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u043E\u0434: ", currentYear));
	// Декларативный стиль конец
  };
