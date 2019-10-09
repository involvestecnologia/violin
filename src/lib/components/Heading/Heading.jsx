import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./style";

export const Heading = props => (
    <StyledHeading {...props} />
);

Heading.propTypes = {
    /** Defines kind heading */
    title: PropTypes.oneOf(["title", "sub", "section"]),
    /** Removes all margins */
    noMargin: PropTypes.bool
};

Heading.defaultProps = {
    title: "title",
    noMargin: false
};

