import React from "react"
import PropTypes from "prop-types"

class MainContent extends React.Component {
  render () {
    return (
      <main>
        <Card />
      </main>
    );
  }
}

function Card() {
  return(
    <div className="row">
      <div className="col s6 m9">
        <h2 className="header">Recommandation</h2>
        <a href="#">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Hatomugi genmai</p>
                <p>2000円</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainContent
