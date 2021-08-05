import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import Button from "../components/button"
import { Link } from "gatsby"


const Header = ({  }) => {

  const [isActive, setActive] = useState("false");
  
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
  <header>
    <div className="logo-container">
      {/*<img src="/images/paolomunna.png" />*/}
      <div className="logo-name">
        <span>Paolo</span>
        <span>Munna</span>
      </div>
      <div className="logo-name bottom">
        <span>Paolo</span>
        <span>Munna</span>
      </div>
    </div>
    <div className="nav-container">
      <a onClick={handleToggle}>About</a>
      <a className="">Curriculum</a>
    </div>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
