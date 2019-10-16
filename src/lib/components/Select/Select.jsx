import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, Wrapper, StyledIcon } from "./style";

export const Select = ({ options, defaultValue, className, style, isError, ...props }) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledSelect defaultValue={defaultValue} key={defaultValue} hasIcon="arrow_drop_down" isError={isError} {...props}>
                {options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))} 
            </StyledSelect>
            <StyledIcon hasIcon="arrow_drop_down" isError={isError} />
        </Wrapper>
    )
}

Select.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.any,
    hasSize: PropTypes.oneOf(["small", "normal", "large"])
};

Select.defaultProps = {
    defaultValue: "",
    hasSize: "normal"
};
