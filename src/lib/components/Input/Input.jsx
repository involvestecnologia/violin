import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./style";

export const Input = props => <StyledInput {...props} />

Input.propTypes = {
    error: PropTypes.bool
};

Input.defaultProps = {
    error: false
};