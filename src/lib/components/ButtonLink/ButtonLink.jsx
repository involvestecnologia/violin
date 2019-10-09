import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./style";

export const ButtonLink = props => <StyledLink {...props} />

ButtonLink.propTypes = {
    color: PropTypes.oneOf(["white", "primary", "accent", "done", "error", "alert", "progress"])
};

ButtonLink.defaultProps = {
    color: "primary"
};
