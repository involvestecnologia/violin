import React from 'react';
import PropTypes from "prop-types";
import { WrapperIcon } from "./style";

export const Icon = ({ icon, color, size, ...props }) => {
    return (
        <WrapperIcon hasColor={color} hasSize={size} {...props}>{icon}</WrapperIcon>
    );
}

Icon.propTypes = {
    /** Icon name from [Material Icons](https://material.io/resources/icons/?style=round) library */
    icon: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["default", "primary", "accent", "done", "error", "alert", "progress"]),
    /** Choose a size based in font-size */
    size: PropTypes.number
};

Icon.defaultProps = {
    color: null,
    size: null
};