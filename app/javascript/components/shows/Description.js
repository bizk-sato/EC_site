import React from "react"
import PropTypes from "prop-types"
class Description extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 m12">
          <h4>Description</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Description
