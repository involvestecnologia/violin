import styled from "styled-components";
import { theme as involves } from "../../theme";
import { theme, ifProp, switchProp } from "styled-tools";

export const StyledText = styled.p`
    margin: 0;
    margin-bottom: ${ifProp(
        "margin",
        theme("spacing.space3", involves.spacing.space3)
    )};
    font-size: ${switchProp("size", {
        small: theme("typography.fontSize.size1", involves.typography.fontSize.size1),
        body: theme("typography.fontSize.size2", involves.typography.fontSize.size2),
        lead: theme("typography.fontSize.size3", involves.typography.fontSize.size3)
    })};
    font-weight: ${ifProp(
        "bold",
        theme("typography.fontWeight.bold", involves.typography.fontWeight.bold)
    )};
    font-style: ${ifProp(
        "italic",
        "italic"
    )};
    color: ${ifProp(
        "color",
        switchProp("color", {
            default: theme("palette.default.regular", involves.palette.default.regular),
            white: theme("palette.system.white", involves.palette.system.white),
            primary: theme("palette.primary.regular", involves.palette.primary.regular),
            accent: theme("palette.accent.regular", involves.palette.accent.regular),
            error: theme("palette.error.regular", involves.palette.error.regular),
            alert: theme("palette.alert.regular", involves.palette.alert.regular),
            done: theme("palette.done.regular", involves.palette.done.regular),
            progress: theme("palette.progress.regular", involves.palette.progress.regular)
        })
    )};
    white-space: ${ifProp("nowrap", "nowrap")};
`;


