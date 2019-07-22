import React from "react"
import PropTypes from "prop-types"
import Header from "../top/Header"
import ProductInfo from './ProductInfo'
import ImageViewer from './ImageViewer'
import ProductQuantitative from './ProductQuantitative'
import Button from './Button'
import Description from './Description'
import Review from './Review'

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }

  handleClick = (val) => {
    const list = this.props.products.filter((product) =>
      product.category.indexOf(val) >= 0
    );
    this.setState({
      products: list
    });
  }

  render () {
    return (
      <React.Fragment>
        <Header
          searchUrl={this.props.searchUrl}
          csrfToken={this.props.csrfToken}
          showLowBar={this.props.showLowBar}
          handleClick={this.handleClick}
        />
        <main>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <ProductInfo stars={this.props.stars} product={this.props.product} />
                <ImageViewer image={this.props.product.image} />
                <ProductQuantitative product={this.props.product} />
                <Button />
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <Description description={this.props.product.description} />
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <Review reviews={this.props.reviews} />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Show
