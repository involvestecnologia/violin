function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 4px;\n  font-size: ", ";\n  color: ", ";\n  transform: rotate(180deg);\n  cursor: default;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  margin-top: 6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: ", ";\n  box-sizing: border-box;\n  border: none;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 0 ", ";\n  outline: none;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  box-shadow: 0 0 0 transparent;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 0 0 2px ", ";\n  background-color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  &::before {\n    content: ' - ';\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';
export var LabelContainer = styled.div(_templateObject());
export var Label = styled.label(_templateObject2(), getFromTheme('typography.fontSize.body'), getFromTheme('typography.fontWeight.bold'));
export var LabelText = styled.span(_templateObject3(), ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.900')));
export var HelpLabel = styled.small(_templateObject4(), getFromTheme('typography.fontSize.small'), getFromTheme('palette.black.500'), getFromTheme('typography.fontWeight.regular'));
var errorStyle = css(_templateObject5(), getFromTheme('palette.red.600'), withProp(getFromTheme('palette.red.100'), transparentize(0.2)), getFromTheme('palette.red.600'), withProp(getFromTheme('palette.red.100'), transparentize(0.2)));
export var Input = styled.input(_templateObject6(), ifProp('small', '30px', ifProp('large', '52px', '40px')), withProp(getFromTheme('palette.primary.900'), transparentize(0.9)), ifProp('large', '16px', '10px'), getFromTheme('common.transition'), getFromTheme('typography.fontFamily'), ifProp('large', getFromTheme('typography.fontSize.subtitle'), ifProp('small', getFromTheme('typography.fontSize.small'), getFromTheme('typography.fontSize.body'))), getFromTheme('palette.black.900'), getFromTheme('palette.black.500'), getFromTheme('palette.misc.white'), getFromTheme('palette.primary.500'), withProp(getFromTheme('palette.misc.black'), transparentize(0.96)), withProp(getFromTheme('palette.black.900'), transparentize(0.75)), withProp(getFromTheme('palette.black.500'), transparentize(0.75)), function (props) {
  return props.error && errorStyle;
});
export var HelpText = styled.div(_templateObject7(), getFromTheme('typography.fontSize.small'), ifProp('error', getFromTheme('palette.red.700'), getFromTheme('palette.black.500')), ifProp('error', getFromTheme('typography.fontWeight.semiBold'), getFromTheme('typography.fontWeight.regular')));
export var InfoIcon = styled(Icon)(_templateObject8(), rem(20), getFromTheme('palette.black.300'));