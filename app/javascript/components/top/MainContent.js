import React from "react"
import PropTypes from "prop-types"

class MainContent extends React.Component {
  render () {
    return (
      <main>
        {this.props.items.map((item) =>
          <Card item={item} key={item.id} />
        )}
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
              <img src="https://images-na.ssl-images-amazon.com/images/I/51aQGtXV0LL._SL1000_.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{props.item.name}</p>
                <p>{props.item.price}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainContent
