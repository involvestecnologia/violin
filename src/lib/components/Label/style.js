import styled from "styled-components";
import { theme as involves } from "../../theme";
import { theme, ifProp } from "styled-tools";

export const StyledLabel = styled.label`
    display: block;
    font-family: ${theme("typography.fontFamily", involves.typography.fontFamily)};
    font-size: ${theme("typography.fontSize.regular", involves.typography.fontSize.regular)};
    font-weight: ${theme("typography.fontWeight.semiBold", involves.typography.fontWeight.semiBold)};
    color: ${ifProp(
        "disabled",
        theme("palette.default.regular", involves.palette.default.regular),
        theme("palette.system.dark", involves.palette.system.dark)
    )};
`;

export const Description = styled.small`
    font-size: ${theme("typography.fontSize.small", involves.typography.fontSize.small)};
    font-style: italic;
    color: ${theme("palette.default.regular", involves.palette.default.regular)};
    margin-left: 4px;
`;