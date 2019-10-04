import styled from "styled-components";
import { theme as involves } from "../../theme";
import { rem } from "polished";
import { ifProp, ifNotProp, switchProp, theme } from "styled-tools";

const defaultPalette = type => ({
    default: theme(`palette.default.${type}`, involves.palette.default[type]),
    primary: theme(`palette.primary.${type}`, involves.palette.primary[type]),
    accent: theme(`palette.accent.${type}`, involves.palette.accent[type]),
    done: theme(`palette.done.${type}`, involves.palette.done[type]),
    error: theme(`palette.error.${type}`, involves.palette.error[type]),
    alert: theme(`palette.alert.${type}`, involves.palette.alert[type]),
    progress: theme(`palette.progress.${type}`, involves.palette.progress[type])
});

const regularPalette = defaultPalette("regular");
const darkPalette = defaultPalette("dark");
const shadowPalette = defaultPalette("shadow");

export const StyledButton = styled.button`
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    outline: none;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: ${theme("borderRadius.border4", involves.borderRadius.border4)};
    height: ${switchProp("size", {
        small: "32px",
        normal: "40px",
        large: "60px"
    })};
    font-size: ${switchProp("size", {
        small: rem(14),
        normal: rem(14),
        large: rem(16)
    })};
    display: ${ifProp("block", "flex", "inline-flex")};
    width: ${ifProp("block", "100%", "auto")};
    min-width: ${ifProp({ size: "large" }, "288px")};
    background-color: ${ifProp(
        "outline", 
        "transparent",
        switchProp("color", regularPalette)
    )};
    color: ${ifProp(
        "outline",
        switchProp("color", regularPalette),
        involves.palette.system.white
    )};
    border: ${ifProp(
        "outline", 
        ifProp(
            { size: "large" },
            "2px",
            "1px"
        ), 
        "0"
    )} solid ${switchProp("color", regularPalette)};
    
    &:hover {
        box-shadow: ${theme("shadow.shadow12", involves.shadow.shadow12)} ${switchProp("color", shadowPalette)};
    }
    
    &:active {
        box-shadow: ${theme("shadow.shadow3", involves.shadow.shadow3)} ${switchProp("color", shadowPalette)};
        background-color: ${ifNotProp(
            "outline",
            switchProp("color", darkPalette)
        )};
        border-color: ${ifProp(
            "outline",
            switchProp("color", darkPalette)
        )};
        color: ${ifProp(
            "outline",
            switchProp("color", darkPalette)
        )};
    }

    &:disabled,
    &:disabled:hover {
        background-color: ${theme("palette.system.light", involves.palette.system.light)};
        color: ${theme("palette.default.light", involves.palette.default.light)};
        box-shadow: none;
        cursor: not-allowed;
    }
`;