import styled from "styled-components";
import { StyledInput } from "../Input/style";

export { Wrapper, StyledIcon } from "../Input/style";

export const StyledSelect = styled(StyledInput).attrs(() => ({ as: "select" }))`
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
`;