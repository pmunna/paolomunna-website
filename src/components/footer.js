import * as React from "react"
import Button from "../components/button"
import { Link } from "gatsby"

const Footer = ({  }) => (
  <footer>
    <div className="footer-container">
      <Button link="/" type="icon" text="dribbble" style="round"/>
      <Button link="/" type="icon" text="twitter" style="round"/>
      <Button link="/" type="icon" text="instagram" style="round"/>
      <Button link="/" type="icon" text="linkedin" style="round"/>
      <Button link="/" type="mail" text="mail" style="round"/>
    </div>
  </footer>
)


export default Footer
