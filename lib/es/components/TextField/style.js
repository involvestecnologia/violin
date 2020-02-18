function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: ", ";\n  box-sizing: border-box;\n  border: none;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 0 ", ";\n  outline: none;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  box-shadow: 0 0 0 transparent;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 0 0 2px ", ";\n  background-color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
var errorStyle = css(_templateObject(), getFromTheme('palette.red.600'), withProp(getFromTheme('palette.red.100'), transparentize(0.2)), getFromTheme('palette.red.600'), withProp(getFromTheme('palette.red.100'), transparentize(0.2)));
export var Input = styled.input(_templateObject2(), ifProp('small', '30px', ifProp('large', '52px', '40px')), withProp(getFromTheme('palette.primary.900'), transparentize(0.9)), ifProp('large', '16px', '10px'), getFromTheme('common.transition'), getFromTheme('typography.fontFamily'), ifProp('large', getFromTheme('typography.fontSize.subtitle'), ifProp('small', getFromTheme('typography.fontSize.small'), getFromTheme('typography.fontSize.body'))), getFromTheme('palette.black.900'), getFromTheme('palette.black.500'), getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'), withProp(getFromTheme('palette.misc.black'), transparentize(0.96)), withProp(getFromTheme('palette.black.900'), transparentize(0.75)), withProp(getFromTheme('palette.black.500'), transparentize(0.75)), function (props) {
  return props.error && errorStyle;
});