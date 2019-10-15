import React from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

export const TextForm = props => <Text {...props} />;

TextForm.propTypes = {
    hasValidate: PropTypes.oneOf(["regular", "alert", "success", "error"])
};

TextForm.defaultProps = {
    hasValidate: "regular"
};

