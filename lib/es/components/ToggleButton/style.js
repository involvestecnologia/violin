function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:focus ~ ", " {\n    ", "\n  }\n  &:checked ~ ", " {\n    ", "\n  }\n\n  &:disabled ~ ", " {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    opacity: 0.18;\n    cursor: not-allowed;\n    &:hover {\n      box-shadow: none;\n    }\n  }\n\n  &:disabled:checked ~ ", " {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    opacity: 0.26;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0 16px;\n  font-size: ", ";\n  font-weight: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n  transition: ", ";\n\n  &:hover,\n  &:focus {\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 4px 8px ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
export var Wrapper = styled.label(_templateObject());
var hoverStyle = css(_templateObject2(), withProp(getFromTheme('palette.black.900'), transparentize(0.8)));
var activeStyle = css(_templateObject3(), getFromTheme('palette.primary.50'), getFromTheme('palette.primary.500'), getFromTheme('palette.primary.500'));
export var StyledButton = styled.div(_templateObject4(), getFromTheme('typography.fontSize.body'), getFromTheme('typography.fontWeight.semiBold'), getFromTheme('palette.black.300'), getFromTheme('palette.black.50'), getFromTheme('palette.black.500'), getFromTheme('common.transition'), hoverStyle);
export var HiddenInput = styled.input(_templateObject5(), StyledButton, hoverStyle, StyledButton, activeStyle, StyledButton, getFromTheme('palette.black.200'), getFromTheme('palette.black.200'), getFromTheme('palette.black.900'), StyledButton, getFromTheme('palette.black.200'), getFromTheme('palette.primary.700'), getFromTheme('palette.primary.700'));