import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledIcon} from "./style";

export const Button = ({ children, hasIcon, ...props }) => (
    <StyledButton {...props}>{hasIcon && <StyledIcon hasIcon={hasIcon} />} {children}</StyledButton>
);

Button.propTypes = {
    hasColor: PropTypes.oneOf(["default", "primary", "accent", "done", "error", "alert", "progress"]),
    /** Apply width 100% */
    isBlock: PropTypes.bool,
    hasSize: PropTypes.oneOf(["small", "normal", "large"]),
    isOutline: PropTypes.bool,
    hasIcon: PropTypes.string
};

Button.defaultProps = {
    hasColor: "default",
    isBlock: false,
    hasSize: "normal",
    isOutline: false,
    hasIcon: null
};
