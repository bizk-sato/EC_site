import React from "react"
import PropTypes from "prop-types"
import TopBar from "./TopBar"
import MiddleBar from "./MiddleBar"
import LowBar from "./LowBar"

class Header extends React.Component {
  render () {
    return (
      <header>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <TopBar />
          </div>
          <div className="nav-content">
            <MiddleBar searchUrl={this.props.searchUrl} csrfToken={this.props.csrfToken} />
            { this.props.showLowBar && <LowBar categories={this.props.categories} handleClick={this.props.handleClick} />}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header
