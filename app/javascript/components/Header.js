import React from "react"
import PropTypes from "prop-types"
import TopBar from "./TopBar"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <TopBar />
      </React.Fragment>
    );
  }
}

export default Header
