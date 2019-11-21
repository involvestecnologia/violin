import React from 'react';
import styled from 'styled-components';
import { theme } from '../../lib';

const Code = styled.pre`
  padding: 16px;
  background: rgb(246, 248, 250);
  border-radius: 4px;
  font-size: 85%;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: Inconsolata, sans-serif;
`;

export const ObjectTheme = () => (
  <Code>
    {JSON.stringify(theme, null, 2)}
  </Code>
)
