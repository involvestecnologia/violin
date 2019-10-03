import React from "react";
import { StyledButton } from "./style";

export const Button = props => <StyledButton {...props} />

Button.defaultProps = {
    block: false,
    lg: false,
    color: "primary"
}