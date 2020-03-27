import React from "react"
import { Link } from "gatsby"

import Layout from "templates/Layout"
import Meta from "atoms/Meta"

const About = () => (
  <Layout>
    <Meta title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
