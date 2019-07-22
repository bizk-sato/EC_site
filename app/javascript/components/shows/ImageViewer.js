import React from "react"
import PropTypes from "prop-types"
class ImageViewer extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 m12">
          <img className="responsive-img" src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default ImageViewer
