/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

import SiteLoader from "./loader.js"
import "../assets/css/style.scss"

var colors = ["red","blue","green","yellow","purple","pink"];
var randColor = colors[Math.floor(Math.random() * colors.length)];

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        } 
      }
    }
  `)
  
  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
  );

  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className={`external-container ${randColor}`}>
          <main>{children}</main>
          <Footer />
        </div>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout