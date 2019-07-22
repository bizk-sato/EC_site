import React from "react"
import PropTypes from "prop-types"
class ProductQuantitative extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 m12">
          <h4 className="text" style={{fontSize: '20px'}}><span className="price-num">{this.props.product.price}</span>円</h4>
          <Stock product={this.props.product} />
        </div>
      </div>
    );
  }
}

function Stock(props) {
  let stock = parseInt(props.product.stock)
  if(stock < 1) {
    return <p><i className="material-icons yellow-text vertical-text-bottom">sentiment_very_dissatisfied</i><span>在庫なし</span></p>
  } else if(stock < 3) {
    return <p><i className="material-icons red-text vertical-text-bottom">sentiment_satisfied</i><span>在庫わずか</span></p>
  } else if(stock > 4) {
    return <p><i className="material-icons blue-text vertical-text-bottom">sentiment_very_satisfied</i><span>在庫あり</span></p>
  }
}

export default ProductQuantitative
