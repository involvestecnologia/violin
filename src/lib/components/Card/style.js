import styled from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';

export const CardWrapper = styled.div`
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(31, 14, 61, 0.05);
  padding: 16px;
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 10px;
  background: ${getFromTheme('palette.misc.white')};
`;

export const CardHeader = styled.header`
  display: grid;
  grid-auto-columns: auto;
  grid-template-columns: auto max-content;
  align-content: center;
`;

export const CardTitles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardActions = styled.div`
  display: grid;
  grid-column-gap: 2px;
  grid-template-rows: 100%;
  grid-auto-flow: column;
`;
