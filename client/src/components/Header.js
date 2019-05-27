import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			 <nav>
			    <div href="www.example.com" className="nav-wrapper">
			      <a className="brand-logo">Emaily</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="sass.html">Login With Google</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">JavaScript</a></li>
			      </ul>
			    </div>
			  </nav>
		)
	}
}

export default Header;