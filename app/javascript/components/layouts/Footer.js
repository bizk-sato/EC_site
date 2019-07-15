import React from "react"
import PropTypes from "prop-types"
class Footer extends React.Component {
  render () {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Contact Info</h5>
              <p class="grey-text text-lighten-4">email: p.julia@gmail.com</p>
              <p class="grey-text text-lighten-4">tel: 090123456**</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2019 P.Julia All rights reserved
          <a class="grey-text text-lighten-4 right" href="#!">Home</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
