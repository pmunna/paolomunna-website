import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider />
  </Layout>
)

export default IndexPage
