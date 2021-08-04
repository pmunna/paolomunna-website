import * as React from "react"
import PropTypes from "prop-types"
import Button from "../components/button"
import { Link } from "gatsby"

const Header = ({  }) => (
  <header>
    <div className="logo-container">
      <img src="/images/paolomunna.png" />
    </div>
    <div className="nav-container">
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
