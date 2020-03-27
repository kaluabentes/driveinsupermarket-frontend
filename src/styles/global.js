import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

import { FONT_FAMILY } from "styles/variables"

export default createGlobalStyle`
  ${styledNormalize}
  
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${FONT_FAMILY};
  }
  
  p, li {
    line-height: 1.5em;
    font-size: 18px;
  }
`
