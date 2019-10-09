import styled from "styled-components";
import { theme as involves } from "../../theme";
import { switchProp, theme } from "styled-tools";

const defaultPalette = type => ({
    white: theme(`palette.system.white`, involves.palette.system.white),
    default: theme(`palette.default.${type}`, involves.palette.default[type]),
    primary: theme(`palette.primary.${type}`, involves.palette.primary[type]),
    accent: theme(`palette.accent.${type}`, involves.palette.accent[type]),
    done: theme(`palette.done.${type}`, involves.palette.done[type]),
    error: theme(`palette.error.${type}`, involves.palette.error[type]),
    alert: theme(`palette.alert.${type}`, involves.palette.alert[type]),
    progress: theme(`palette.progress.${type}`, involves.palette.progress[type])
});

const regularPalette = defaultPalette("regular");

export const StyledLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: ${theme("common.transition", involves.common.transition)};
    color: ${switchProp("color", regularPalette)};
    
    &:hover {
        text-decoration: underline;
    }

    &:disabled,
    &:disabled:hover {
        color: ${theme("palette.default.light", involves.palette.default.light)};
        cursor: not-allowed;
    }
`;
