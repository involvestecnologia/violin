import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, Description } from "./style";

export const Label = ({ children, hasDescription, ...props }) => (
    <StyledLabel {...props}>
        {children} 
        {hasDescription && <Description> - {hasDescription}</Description>}
    </StyledLabel>
);

Label.propTypes = {
    /** Additional text label */
    hasDescription: PropTypes.string,
    disabled: PropTypes.bool
};

Label.defaultProps = {
    hasDescription: null,
    disabled: false
};

