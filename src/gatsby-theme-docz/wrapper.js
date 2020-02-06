import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { GlobalStyle } from 'lib';

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
