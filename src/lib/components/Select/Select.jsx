import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, Wrapper, StyledIcon } from "./style";

export const Select = ({ options, className, style, error, ...props }) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledSelect icon="arrow_drop_down" error={error} {...props}>
                {options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))} 
            </StyledSelect>
            <StyledIcon icon="arrow_drop_down" error={error} />
        </Wrapper>
    )
}

Select.propTypes = {
    options: PropTypes.array.isRequired,
    size: PropTypes.oneOf(["small", "normal", "large"])
};

Select.defaultProps = {
    size: "normal"
};
