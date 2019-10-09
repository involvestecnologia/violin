import styled from "styled-components";
import { theme as involves } from "../../theme";
import { theme, ifProp } from "styled-tools";

export const Wrapper = styled.div`
    display: block;
    margin-bottom: ${ifProp(
        "noMargin",
        "0",
        theme("spacing.space4", involves.spacing.space4)
    )};
`;