import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme, Text } from '../../lib';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-bottom: 30px;

  @media(min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  box-shadow: ${theme.shadow.shadow6} rgba(0,0,0,.1);
  background-color: ${({ color, variant }) => theme.palette[color][variant]};
  padding: 10px;
  display: flex;
  align-items: flex-end;
`;

const Info = styled.div`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 6px;
  background: white;
  min-width: 50%;
  box-shadow: ${theme.shadow.shadow4} rgba(0,0,0,.1);
`;

export const BoxColor = ({ variant, color }) => (
  <Card variant={variant} color={color}>
    <Info>
      <Text small bold style={{ color: theme.palette.default.dark }}>
        {theme.palette[color][variant]}
      </Text>
      <Text small color="default">{variant}</Text>
    </Info>
  </Card>
)

BoxColor.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
