import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, Wrapper, StyledIcon } from "./style";

export const Select = ({ options, className, style, isError, ...props }) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledSelect hasIcon="arrow_drop_down" isError={isError} {...props}>
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
    hasSize: PropTypes.oneOf(["small", "normal", "large"])
};

Select.defaultProps = {
    hasSize: "normal"
};
