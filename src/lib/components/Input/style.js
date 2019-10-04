import styled from "styled-components";
import { theme as involves } from "../../theme";
import { ifProp, theme } from "styled-tools";

export const StyledInput = styled.input`
    width: 100%;
    min-height: 40px;
    border: 0;
    box-sizing: border-box;
    background-color: ${ifProp(
        "error",
        theme("palette.error.white", involves.palette.error.white),
        theme("palette.default.white", involves.palette.default.white)
    )};
    border-radius: ${theme("borderRadius.border4", involves.borderRadius.border4)};
    padding: 0 16px;
    transition: ${theme("common.transition", involves.common.transition)};
    outline: none;
    font-family: ${theme("typography.fontFamily", involves.typography.fontFamily)};
    font-size: ${theme("typography.fontSize.regular", involves.typography.fontSize.regular)};
    color: ${theme("palette.system.dark", involves.palette.system.dark)};
    box-shadow: inset ${ifProp(
        "error",
        theme("shadow.shadowBorder2", involves.shadow.shadowBorder2)
    )} ${ifProp(
        "error",
        theme("palette.error.regular", involves.palette.error.regular)
    )};

    &::placeholder {
        color: ${theme("palette.default.dark", involves.palette.default.dark)};
    }
    
    &:focus {
        box-shadow: inset ${theme("shadow.shadowBorder2", involves.shadow.shadowBorder2)} ${ifProp(
            "error",
            theme("palette.error.regular", involves.palette.error.regular),
            theme("palette.primary.regular", involves.palette.primary.regular)
        )};
        background-color: ${ifProp(
            "error",
            theme("palette.error.white", involves.palette.error.white),
            theme("palette.system.white", involves.palette.system.white)
        )};
    }

    &:disabled {
        background-color: ${theme("palette.system.light", involves.palette.system.light)};
        color: ${theme("palette.default.regular", involves.palette.default.regular)};
        cursor: not-allowed;

        &::placeholder {
            color: ${theme("palette.default.regular", involves.palette.default.regular)};
        }
    }
`;