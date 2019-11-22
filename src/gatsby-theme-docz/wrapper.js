import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyleDocz = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

  [data-testid="live-preview"] * {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default ({ children }) => (
  <>
    <GlobalStyleDocz />
    {children}
  </>
)
