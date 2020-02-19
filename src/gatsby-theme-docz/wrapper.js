import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { GlobalStyle } from 'lib';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalGatsbyStyle = createGlobalStyle`
  code {
    border-bottom: 2px solid #105eff;
    font-style: italic;
  }
  pre {
    border: 1px solid var(--theme-ui-colors-border,#CED4DE);
  }

  [data-testid="live-preview"] {
    padding: 20px;
  }
`

export default ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round|Material+Icons+Outlined" />
    </Helmet>
    <GlobalGatsbyStyle />
    <GlobalStyle />
    {children}
  </>
)
