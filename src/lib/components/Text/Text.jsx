import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./style";

export const Text = props => (
    <StyledText {...props} />
);

Text.propTypes = {
    hasSize: PropTypes.oneOf(["small", "body", "lead"]),
    hasColor: PropTypes.oneOf(["white", "default", "primary", "accent", "error", "alert", "done", "progress"]),
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    /** Apply margin bottom */
    isMargin: PropTypes.bool,
    /** Avoid text to break  */
    isNowrap: PropTypes.bool
};

Text.defaultProps = {
    hasSize: "body",
    hasColor: null,
    isBold: false,
    isItalic: false,
    isMargin: false,
    isNowrap: false
};

