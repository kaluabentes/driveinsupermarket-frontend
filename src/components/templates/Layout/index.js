import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "styles/global"

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

Layout.propTypes = PROP_TYPES
