import React from "react"
import PropTypes from "prop-types"
import TopBar from "./TopBar"
import MiddleBar from "./MiddleBar"
import LowBar from "./LowBar"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <TopBar />
          </div>
          <div className="nav-content">
            <MiddleBar />
            <LowBar />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header
