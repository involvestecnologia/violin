import styled from "styled-components";
import { theme as involves } from "../../theme";
import { switchProp, theme } from "styled-tools";
import switchPalette from "../../utils/switchPalette";

export const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: ${theme("common.transition", involves.common.transition)};
  color: ${switchProp("hasColor", switchPalette())};

  &:hover {
    text-decoration: underline;
  }

  &:disabled,
  &:disabled:hover {
    color: ${theme("palette.default.light", involves.palette.default.light)};
    cursor: not-allowed;
  }
`;
