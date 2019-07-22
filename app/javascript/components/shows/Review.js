import React from "react"
import PropTypes from "prop-types"
import Star from './Star'

class Review extends React.Component {

  reviewComponent = (reviewIndex) => {
    let review = this.props.reviews[reviewIndex]
    let stars = []
    for(let i = 0; i < parseInt(review.stars); i++) {
      stars.push(<Star key={i} />)
    }
    return(
      <div className="row" key={review.id}>
        <div className="col s12 m12">
          <li>
            <span>{stars}</span>
            <p>{review.comment}</p>
            <br />
            <div class="divider"></div>
          </li>
        </div>
      </div>
    )
  }

  renderReview = () => {
    let components = []
    for(let reviewIndex in this.props.reviews) {
       components.push(this.reviewComponent(reviewIndex))
      }
    return components
  }

  render () {
    return (
      <div className="row">
        <div className="col s12 m12">
          <ul>
            {this.renderReview()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Review
