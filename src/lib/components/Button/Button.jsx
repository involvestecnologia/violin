import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./style";

const Button = props => <StyledButton {...props} />

Button.propTypes = {
    /** Color button */
    color: PropTypes.oneOf(["default", "primary", "accent", "done", "error", "alert", "progress"]),
    /** Button with width 100% */
    block: PropTypes.bool,
    /** Size button */
    size: PropTypes.oneOf(["small", "normal", "large"]),
    /** Outline button style */
    outline: PropTypes.bool
};

Button.defaultProps = {
    color: "default",
    block: false,
    size: "normal",
    outline: false
};

export { Button };