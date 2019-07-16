import React from "react"
import PropTypes from "prop-types"

class MainContent extends React.Component {
  render () {
    let list = this.props.products.map((product) =>
      <Card product={product} key={product.id} />
    );

    return (
      <main>
        {list}
      </main>
    );
  }
}

function Card(props) {
  return(
    <div className="row">
      <div className="col s6 m9 offset-l1">
        <a href="#">
          <div className="card horizontal">
            <div className="card-image">
              <img src={props.product.image} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{props.product.name}</p>
                <p>{props.product.price}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainContent
