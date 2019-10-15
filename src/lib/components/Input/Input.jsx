import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Wrapper, StyledIcon } from "./style";

export const Input = ({ className, style, hasIcon, isError, onClickIcon, ...props }) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledInput isError={isError} {...props} />
            {hasIcon && <StyledIcon hasIcon={hasIcon} isError={isError} onClick={onClickIcon} />}
        </Wrapper>
    )
}

Input.propTypes = {
    isError: PropTypes.bool,
    hasIcon: PropTypes.string,
    onClickIcon: PropTypes.func
};

Input.defaultProps = {
    isError: false,
    hasIcon: null,
    onClickIcon: null
};