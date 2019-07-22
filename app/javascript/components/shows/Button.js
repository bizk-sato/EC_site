import React from "react"
import PropTypes from "prop-types"
class Button extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12 m12">
          <a className="waves-effect waves-light btn"><i className="material-icons left">shopping_cart</i>Add to cart</a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12">
          <a className="waves-effect waves-light btn">Buy now</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Button
