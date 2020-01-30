import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { GlobalStyle } from 'lib';
import { createGlobalStyle } from 'styled-components'

const GlobalGatsbyStyle = createGlobalStyle`
  code {
    border-bottom: 2px solid #105eff;
    font-style: italic;
  }
`

export default ({ children }) => (
  <>
    <GlobalGatsbyStyle />
    <GlobalStyle />
    {children}
  </>
)
