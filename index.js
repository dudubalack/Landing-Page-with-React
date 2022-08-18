import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
    return <div class="card">
    <div class="card-header">
    </div>
    <div class="card-body">
      <h1 class="card-title">A Warm Welcome!</h1>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsam, eligendi, in quo sunt possimus non incidunt adit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquamrepellat.</p>
      <a href="#" class="btn btn-primary">Call to action!</a>
    </div>
  </div>
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,

};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);


