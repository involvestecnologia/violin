import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./style";

export const Text = props => (
    <StyledText {...props} />
);

Text.propTypes = {
    size: PropTypes.oneOf(["small", "body", "lead"]),
    color: PropTypes.oneOf(["white", "default", "primary", "accent", "error", "alert", "done", "progress"]),
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    /** Apply margin bottom */
    margin: PropTypes.bool,
    /** Avoid text to break  */
    nowrap: PropTypes.oneOf
};

Text.defaultProps = {
    size: "body",
    color: null,
    bold: false,
    italic: false,
    margin: false,
    nowrap: false
};

