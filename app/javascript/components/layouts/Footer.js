import React from "react"
import PropTypes from "prop-types"

class Footer extends React.Component {
  render () {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contact Info</h5>
              <p className="grey-text text-lighten-4">email: *****@gmail.com</p>
              <p className="grey-text text-lighten-4">tel: 090123456**</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2019 EC All rights reserved
          <a className="grey-text text-lighten-4 right" href="#!">Home</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
