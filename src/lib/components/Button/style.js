import styled from "styled-components";
import { theme as involves } from "../../theme";
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
    flex-wrap: nowrap;
    white-space: nowrap;
    padding: 0 16px;
    outline: none;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: ${theme("common.transition", involves.common.transition)};
    border-radius: ${theme("borderRadius.border1", involves.borderRadius.border1)};
    height: ${switchProp("size", {
        small: "32px",
        normal: "40px",
        large: "60px"
    })};
    font-size: ${switchProp("size", {
        small: theme("typography.fontSize.size1", involves.typography.fontSize.size1),
        normal: theme("typography.fontSize.size1", involves.typography.fontSize.size1),
        large: theme("typography.fontSize.size3", involves.typography.fontSize.size3)
    })};
    display: ${ifProp("block", "flex", "inline-flex")};
    width: ${ifProp("block", "100%", "auto")};
    min-width: ${ifProp({ size: "large" }, "240px")};
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
    border: 0;
    --regular: ${ifProp(
        "outline",
        switchProp("color", regularPalette),
        "transparent"
    )};
    --active: ${ifProp(
        "outline",
        switchProp("color", darkPalette),
        "transparent"
    )};
    --outline: inset
        ${ifProp(
            "outline",
            ifProp(
                { size: "large" },
                theme("shadow.shadowBorder2", involves.shadow.shadowBorder2),
                theme("shadow.shadowBorder1", involves.shadow.shadowBorder1)
            ),
            "0 0 0 0"
        )};
    box-shadow: var(--outline) var(--regular);
    
    &:hover {
        box-shadow: var(--outline) var(--regular), ${theme("shadow.shadow12", involves.shadow.shadow12)} ${switchProp("color", shadowPalette)};
    }
    
    &:active {
        box-shadow: var(--outline) var(--active), ${theme("shadow.shadow3", involves.shadow.shadow3)} ${switchProp("color", shadowPalette)};
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
