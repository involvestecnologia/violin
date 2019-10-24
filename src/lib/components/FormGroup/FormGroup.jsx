import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

export const FormGroup = props => <Wrapper {...props} />;

FormGroup.propTypes = {
  noMargin: PropTypes.bool
};

FormGroup.defaultProps = {
  noMargin: false
};

