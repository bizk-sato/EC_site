import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import MainContent from "./MainContent"

class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default Index
