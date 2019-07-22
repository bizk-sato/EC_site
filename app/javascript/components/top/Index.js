import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import MainContent from "./MainContent"

class Index extends React.Component {
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
          categories={this.props.categories}
          searchUrl={this.props.searchUrl}
          csrfToken={this.props.csrfToken}
          showLowBar={this.props.showLowBar}
          handleClick={this.handleClick}
        />
        <MainContent products={this.state.products}/>
      </React.Fragment>
    );
  }
}

export default Index
