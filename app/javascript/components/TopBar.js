import React from "react"
import PropTypes from "prop-types"

class TopBar extends React.Component {
  componentDidMount() {
    $(".dropdown-trigger").dropdown();
  }

  render () {
    return (
      <React.Fragment>
        <HamburgerContent />
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">P.Julia</a>
            <ul className="right hide-on-med-and-down">
              <li><Cart /></li>
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Account<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

function Cart() {
  return(
    <a href="#">
      <i className="material-icons">shopping_cart</i>
      <span>2</span>
    </a>
  );
}

function HamburgerContent() {
  return(
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li className="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
  );
}

export default TopBar
