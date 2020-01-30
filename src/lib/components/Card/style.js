import styled, { css } from 'styled-components';
import getFromTheme from '../../utils/getFromTheme';
import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

export const CardWrapper = styled.div`
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(31, 14, 61, 0.05);
  display: grid;
  grid-template-rows: auto auto;
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
  padding: 16px 16px 0 16px;
  min-width: 0;
`;

const ellipsisStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const CardTitle = styled(Heading)`
  ${ellipsisStyle}
  color: ${getFromTheme('palette.black.500')};
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
`;

export const CardSubTitle = styled(Subheading)`
  ${ellipsisStyle}
`;

export const CardActions = styled.div`
  display: grid;
  grid-column-gap: 2px;
  grid-template-rows: 100%;
  grid-auto-flow: column;
  padding: 8px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;
