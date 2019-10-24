import styled from "styled-components";
import { rem } from "polished";
import { ifProp, switchProp, theme } from "styled-tools";
import switchPalette from "../../utils/switchPalette";

export const WrapperIcon = styled.i`
  font-family: 'Material Icons Round';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-size: ${ifProp(
    "hasSize",
    prop => rem(prop.hasSize),
    "inherit"
  )};
  cursor: ${ifProp("onClick", "pointer")};
  color: ${switchProp("hasColor", switchPalette())};
  transition: ${theme("common.transition")};

  &:hover {
    color: ${ifProp(
      "onClick",
      switchProp("hasColor", switchPalette("dark"))
    )};
  }
`;
