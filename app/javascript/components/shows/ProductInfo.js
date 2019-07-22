import React from "react"
import PropTypes from "prop-types"
import Star from './Star'

class ProductInfo extends React.Component {
  reviews = () => {
    if(this.props.stars.length) {
      let stars = []
      for(let i = 0; i < this.props.stars; i++) {
        stars.push(<Star key={i} />)
      }
      return stars

    } else {
      return 'no reviews yet'
    }
  }

  render () {
    let canvasStyle = {
      display: 'inline-block',
      width: '227px',
      height: '25px',
      verticalAlign: 'top'

    }
    return (
      <div className="row">
        <div className="col s12 m12">
          <p className="card-stats-title">
            <span>
              { this.reviews() }
            </span>
          </p>
          <h4 className="card-stats-number">{this.props.product.name}</h4>
          <p className="card-stats-compare">
              <span className="text">- {this.props.product.category}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductInfo
