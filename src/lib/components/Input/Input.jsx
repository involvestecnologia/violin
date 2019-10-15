import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Wrapper, StyledIcon } from "./style";

export const Input = ({ className, style, hasSize, hasIcon, isError, onClickIcon, ...props }) => {
    return (
        <Wrapper className={className} style={style}>
            <StyledInput isError={isError} hasSize={hasSize} {...props} />
            {hasIcon && <StyledIcon hasIcon={hasIcon} isLarge={hasSize === "large"} isError={isError} onClick={onClickIcon} />}
        </Wrapper>
    )
}

Input.propTypes = {
    isError: PropTypes.bool,
    hasIcon: PropTypes.string,
    hasSize: PropTypes.oneOf(["small", "normal", "large"]),
    onClickIcon: PropTypes.func
};

Input.defaultProps = {
    isError: false,
    hasIcon: null,
    hasSize: "normal",
    onClickIcon: null
};