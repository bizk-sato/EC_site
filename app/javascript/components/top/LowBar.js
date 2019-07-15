import React from "react"
import PropTypes from "prop-types"
class LowBar extends React.Component {
  render () {
    return (
          <div className="container">
            <div className="row">
              <div className="col s4"><a class="waves-effect waves-light btn">Supplement</a></div>
              <div className="col s4"><a class="waves-effect waves-light btn">Cosmetic</a></div>
              <div className="col s4"><a class="waves-effect waves-light btn">En/Vn</a></div>
            </div>
          </div>
    );
  }
}

export default LowBar
