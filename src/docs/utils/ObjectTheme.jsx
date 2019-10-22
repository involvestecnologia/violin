import React from 'react';
import { theme } from "../../lib";
import styled from "styled-components";

const Code = styled.pre`
  padding: 16px;
  background: rgb(246, 248, 250);
  border-radius: 4px;
  font-size: 85%;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: Inconsolata;
`;

export const ObjectTheme = () => {
  return (
    <Code>
      {JSON.stringify(theme, null, 2)}
    </Code>
  )
}