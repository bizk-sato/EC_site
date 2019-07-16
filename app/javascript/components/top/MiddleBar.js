import React from "react"
import PropTypes from "prop-types"

class MiddleBar extends React.Component {
  render () {
    return (
        <div>
          <form action={this.props.searchUrl} method="post">
            <input type="hidden" name="authenticity_token" value={this.props.csrfToken} />
            <div className="input-field">
              <input id="search" type="search" name="search" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
    );
  }
}

export default MiddleBar
