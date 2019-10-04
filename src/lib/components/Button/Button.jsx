import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./style";

export const Button = props => <StyledButton {...props} />

Button.propTypes = {
    color: PropTypes.oneOf(["default", "primary", "accent", "done", "error", "alert", "progress"]),
    block: PropTypes.bool,
    size: PropTypes.oneOf(["small", "normal", "large"]),
    outline: PropTypes.bool
};

Button.defaultProps = {
    color: "default",
    block: false,
    size: "normal",
    outline: false
};
