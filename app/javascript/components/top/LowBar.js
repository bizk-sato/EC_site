import React from "react"
import PropTypes from "prop-types"
class LowBar extends React.Component {
  render () {
    return (
          <div className="container">
            <div className="row">
              {this.props.categories.map((category) =>
                <div className="col s4" key={category.id} data-name={category.name} onClick={() => this.props.handleClick(category.name)}>
                  <a className="waves-effect waves-light btn">{category.name}</a>
                </div>
                )}
              <div className="col s4"><a className="waves-effect waves-light btn">En/Vn</a></div>
            </div>
          </div>
    );
  }
}

export default LowBar
